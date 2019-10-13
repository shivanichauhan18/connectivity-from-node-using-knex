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
    
});
 

app.get('/car',(req,res)=>{
    // var id = req.params.id;
    knex.select('*').from('cars').where('id',10).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log("Oops There is error")
    })
});

// using distinct
app.get("/distinct",function(req,res){
    knex.distinct("FirstName").from("girls").then((DATA)=>{
        res.send(DATA)
    })
});

// arthmetic opratore
app.get("/WHERE",function(req,res){
    knex.select("*").from("girls").where("girlsID",">",7).then((data)=>{
        res.send(data)
    }).catch(()=> {
        console.log("wertyuiopdfghj")
    })
});

// using LIMIT
app.get("/using-Between",function(req,res){
    knex.select("*").from("girls").limit(1,6).then((data)=>{
        res.send(data)
    })
});

// using order by

app.get("/using-Order-By",function(req,res){
    knex.select("*").from("girls").orderBy("FirstName","asc").limit(6).then((data)=>{
        res.send(data)
    });
});

app.get("/between",function(req,res){
    knex.select("*").from("girls").havingNotBetween("girlsID",[8,9]).then((data)=>{
        res.send(data)
    })
});

app.get("/usingLike",function(req,res){
    knex.select("*").from("girls").where("City").LIKE("Indore").then((data)=>{
        res.send(data)
    })
    KEY
})

// creating table

knex.schema.hasTable("girls_detail").then((exists)=>{
    if(!exists){
        return knex.schema.createTable('girls_detail', (table) => {
            table.increments('id')
            table.string('name')
            table.integer('email')
            table.integer('password')
            table.string('age')
        })

    }
})
.catch((err) => { 
    console.log("sdfghjj") 
})
    .finally(() => {
        knex.destroy();
});


// using insert query
app.post('/insertData',function(req, res) {      
    knex('girls_detail').insert({"name":req.body.name,"email":req.body.email,"password":req.body.password,"age":req.body.age})
    .then((result) =>{
        console.log("data inserted sucessfully..:)")
        return res.json({ success: true, message: 'ok' }); 
    }).catch((err)=>{
        res.json("opps their is error")
        console.log(err)
})  
})

// simple updating row 
app.put("/put",function(req,res){
    knex("girls_detail").where("id",1).update({"name":"shivani","email":"shivanic18@navguruul.org","password":"shivani123@","age":19}).then((data)=>{
        res.send("sucessfully data")
    }).catch((err)=>{
        res.send("oops their is error")
    })
})

// user input updating rout
app.put("/put/:id",function(req,res){
    id=req.params.id
    knex("girls_detail").where("id",id).update({"id":req.body.id}).then((data)=>{
        res.send("updated data")
    });
});

app.delete("/delete/:id",function(req,res){
    knex("girls_detail").where("id",req.params.id).del().then((data)=>{
        console.log("delete is sucessful")

        if(err.status>=100 && err.status<600){
            res.status(err.status)
        
        }else{
            res.status(500);
        }
    }).catch((err)=>{
        res.send("opps error")
    })
})


app.listen(2000,() =>{
    console.log("listining 8000 ")
});

