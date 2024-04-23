const express = require('express');
const app = express();

// What you can get a response on main index route
app.get('/', (req, res) => {
  res.send('Service iss up and running.');
});

app.listen(8080, () => {
  console.log('Server is up and running on port 8080');
});
