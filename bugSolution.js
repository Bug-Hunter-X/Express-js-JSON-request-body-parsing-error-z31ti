const express = require('express');
const app = express();
app.use(express.json()); // Ensure this middleware is used BEFORE the route handler
app.post('/data', (req, res) => {
  console.log(req.body); 
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('Request body is empty');
  }
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));