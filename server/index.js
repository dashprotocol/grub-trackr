const express = require('express');
const path = require('path');
const controller = require('./controller.js');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.post('/grub', controller.addGrub);

app.get('/list/:location', controller.getGrubs);

app.listen(PORT, () => console.log('Listening on port: ' + PORT));