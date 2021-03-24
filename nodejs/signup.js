const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Ambulance-Service')
.then(()=>console.log('Connected to Db'))
.catch(err=>console.error('Error',err))
var db= mongoose.connection;
const port = 3000;


const express = require('express');
var bodyParser=require("body-parser");
const app = express();


app.use(bodyParser.json()); 

app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 

    extended: true
}));

app.post('/signup', function(req,res){ 
    
    var fname = req.body.fname; 
    var lname = req.body.lname;
    var email =req.body.email; 
    var pass = req.body.pass; 
    var cpass = req.body.cpass; 
    var phno =req.body.phno; 
    var address = req.body.address;

  

    var data = { 

        "fname": fname, 

        "lname":lname,

        "email":email, 

        "pass":pass, 

        "cpass":cpass,

        "phoneno":phno,
        "address":address 

    } 

db.collection('customer-register').insertOne(data,function(err, collection){ 

        if (err) throw err; 

        console.log("Record inserted Successfully"); 

              

    }); 

          

    // return res.redirect('index.html'); 
})


// Listen
app.listen(port, () => {
  console.log(`Student app listening at http://localhost:${port}`)
})


