const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());


var knex = require("knex")({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user: 'root',
        database: 'ng_data',
        password: 'shivani123'
    }
    
},console.log("database is connected!"));



knex('girls_detail').insert({"name":"pavan","email":22,"password":12345,"age":"pvndhamu@gmail.com"})
    .then((result) =>{
        console.log("data inserted sucessfully..:)")
        // return res.json({ success: true, message: 'ok' }); 
    }).catch((err)=>{
        // return res.json(err)
        console.log(err)
})  
