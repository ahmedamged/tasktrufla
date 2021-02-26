const express = require('express');
const path = require('path');

const app = express();

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

let port = Number(process.env.PORT || 5000);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
