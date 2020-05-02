const express = require('express')
const cors = require('cors')            //send get 
const bodyParser = require('body-parser') //server can accept the data(json) as body (MiddleWare)
const mongoose = require('mongoose') //helper of mongodb 


const app = express()

app.use(cors())
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api/history',require('./api/route'))


const PORT = process.env.PORT || 4444
app.listen(PORT,()=>{
    console.log('App is running on port '+PORT)
    mongoose.connect(`mongodb+srv://shadik:shadik654@cluster0-izfh7.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,{useNewUrlParser:true},()=>
    {
        console.log('db connected')
    })
})