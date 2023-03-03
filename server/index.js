
const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser')

const Connection = require('./database/db');

const userRouter = require('./routes/Userroutes')

const app = express();

app.use(cors());




app.get('/',(req,res)=>{
    res.send("hello world!");
})

app.use('/api/user',userRouter)

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT
Connection();
app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));