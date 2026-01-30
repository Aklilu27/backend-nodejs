const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/example', (req, res,next) => { 
  res.send('Example Page');
});

app.post('/example', (req, res,next) => { 
  res.send('post Page');
});

app.put('/example', (req, res,next) => { 
  res.send('put Page');
});
     
app.patch('/example', (req, res,next) => { 
  res.send('patch Page');
});

app.delete('/example', (req, res,next) => { 
  res.send('this is delete request');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
