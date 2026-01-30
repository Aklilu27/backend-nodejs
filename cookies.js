const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('welcome to home page');
});

app.get('/example', (req, res) => {
  // res.cookie('username', 'Aklilu');
  // res.cookie('role', 'admin');

  // to clear the cookies
  // res.clearCookie('username');
  res.clearCookie('role');
  res.clearCookie('username');
  // const cookies = req.cookies;
  console.log(req.hostname);
  res.send("Example rout");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
