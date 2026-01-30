const express = require('express');
const app = express();
app.use(express.json());

const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017");

let studentCollection;

// Start server AFTER DB connection
function startServer() {
  client.connect()
    .then(() => {
      console.log("Connected to MongoDB");

      const db = client.db("schoolDb");
      studentCollection = db.collection("students");

      app.listen(3000, () => {
        console.log("Server is running on port 3000");
      });
    })
    .catch(err => {
      console.error("MongoDB connection failed:", err);
    });
}

startServer();


// ✅ POST MANY STUDENTS
app.post('/students', (req, res, next) => {
  studentCollection.insertMany(req.body)
    .then(result => {
      res.status(201).json({
        message: "Students added successfully",
        insertedCount: result.insertedCount
      });
    })
    .catch(error => next(error));
});


// ✅ GET students by department
app.get('/student', (req, res, next) => {
  // ✅ GET single student by ID and by email
  // // const {email}= req.query; 
  // // studentCollection.findOne({email: email}).then((data) =>res.status(200).json(data)) 
  // // .catch((error) => res.status(500).send("Error fetching student",
  const { department } = req.query;

  studentCollection.find({ department: department }).toArray()
    .then(students => {
      res.status(200).json(students);
    })
    .catch(error => next(error));
});

// update student 
app.put('/student', (req, res, next) => {
  const { email} = req.query;
  const { department } = req.body;
  studentCollection.updateOne({ email}, {$set:{department: department}},{returnDocument: 'after'})
  .then(data => {console.log(data)
    res.status(200).json({
      message: "Student updated successfully",updatedStudent: data.value });
  }).catch(error =>res.status(500).json({
    message: "Error updating student",
    error: error.message
  }));
});

// delete student
app.delete('/student', (req, res, next) => {
  const {department} = req.body;
  // studentCollection.findOneAndDelete({ email})
  studentCollection.deleteMany({department})
  .then(() => {
    res.status(200).json({ message: "Student deleted successfully"});
  }).catch(error =>res.status(500).json({
    message: "Error deleting student",
    error: error.message}));
});

// ✅ Error Middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Server Error",
    error: err.message
  });
});
