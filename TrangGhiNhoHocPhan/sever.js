const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const HP = require("./sever/model/HP");

const connectDB = require('./sever/database/connection');

const app = express();

dotenv.config({path : 'config.env'})
const PORT = process.env.PORT || 8080

app.set('view engine')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req, res)=>{

  HP.find((err, char) => {
    if (err) {
        res.json({ "kq": 0, "errMsg": err })
    } else {
        res.render("index", {char})
    }
})
})

//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parser requests to bodyParser
app.use(bodyParser.urlencoded({extended:true}));

//set view engine
app.set("view engine", "ejs")
//app.set("view",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers
app.use('/', require('./sever/routes/router'))

app.listen(PORT, ()=> {console.log(`Sever is running on http://localhost:${PORT}`)});