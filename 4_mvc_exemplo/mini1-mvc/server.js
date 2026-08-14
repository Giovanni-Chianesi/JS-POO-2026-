require('dotenv').config();

const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}` );
});