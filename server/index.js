const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const database=require("./helper/database");
const config=require("./config.json");
const Routes=require("./routes/user");
const app=express();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

database.connect();

app.use('/user', Routes);

app.listen(config.index.port, () => {
    console.log('App listening on port : ', config.index.port);
});