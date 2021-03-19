const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Ambulance-Service')
.then(()=>console.log('Connected to Db'))
.catch(err=>console.error('Error',err))

const registerSchema= new mongoose.Schema({
     firstname:String,
     lastname:String,
     email:String,
     password:String,
     confirmpassword:String,
     phoneno:String,
     Address:String
});
const registertionModel = mongoose.model('Registration-Ambulance',registerSchema);

module.exports=registertionModel;
async function registerPatient(){

const register = new registertionModel({
    firstname:'Mandeep',
    lastname:'Singh',
    email:'mandeep@gmail.com',
    password:'345678',
    confirmpassword:'345678',
    phoneno:'4567899876',
    Address:'1345 rue champm'
   
});

const result = await register.save();
console.log(result);

}
   registerPatient();


