const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Ambulance-Service')
.then(()=>console.log('Connected to Db'))
.catch(err=>console.error('Error',err))

const aboutUsSchema= new mongoose.Schema({
     name:String,
     lastname:String,
     email:String,
     dob:String,
     country:String,
     message:String,
     reasonmessage:String
});
const aboutUsModel = mongoose.model('Aboutus-Ambulance',aboutUsSchema);

async function aboutUs(){

const aboutUs = new aboutUsModel ({
    firstname:'Mandeep',
    lastname:'Singh',
    email:'mandeep@gmail.com',
    dob:'11-06-1996',
    country:'India',
    message:'hello world',
    reasonmessage:'nothing serious'
   
});

const result = await aboutUs.save();
console.log(result);

}
   aboutUs();


