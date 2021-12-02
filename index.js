const { response } = require('express');
const express = require ('express');
const { request } = require('http');
const app =express();

const PORT = 9000;

app.get('/', (request, response) =>{
    response.send('Hello, 🇮🇳');
});


app.listen(PORT, () => console.log("App is started in ", PORT));
