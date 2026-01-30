const express = require('express');
const app = express();
app.use(express.json());

const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017");

// Connect to MongoDB
client.connect()
  .then(() => {
    console.log("Connected to MongoDB");
    const db = client.db("schoolDb");
    studentCollection = db.collection("students");
  })
  .catch(err => console.error("MongoDB connection failed:", err));


// ✅ POST MANY STUDENTS
app.post('/students', async (req, res, next) => {
  // const students = req.body;
  studentCollection.insertMany(req.body).then(() => {
      res.status(201).send("Students added successfully");
    }).catch(()=> res.status(500).send("Error adding students",error.message));    
    
      });
// ✅ GET single student by ID
app.get('/student', (req, res, next) => {
  // const {email}= req.query;
  // studentCollection.findOne({email: email}).then((data) =>res.status(200).json(data))
    // .catch((error) => res.status(500).send("Error fetching student", error.message)); 
   const {age}= req.query;
   studentCollection.find({age:parseInt(age)}).toArray()
   .then((data) =>res.status(200).json(data))
  .catch((error) => res.status(500).send("Error fetching student", error.message)); 
});


// ✅ Error Middleware
const errorhandler =(err, req, res, next) => {
  res.status(500).json({
    message: "Server Error",
    error: err.message
   });
}
app.use(errorhandler);


// Start Server (outside any function)
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
