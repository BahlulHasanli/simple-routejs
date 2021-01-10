const express = require('express');
const path = require('path');

const app = express();

app.use('/app', express.static(path.resolve(__dirname, 'src', 'app')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('src', 'index.html'));
});

app.listen(3000, () => console.log('Server run up!'));
