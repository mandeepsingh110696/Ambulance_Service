const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Ambulance-Service')
.then(()=>console.log('Connected to Db'))
.catch(err=>console.error('Error',err))


const express = require('express');

const app = express();




const updateSchema= new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    confirmpassword:String,
    phoneno:String,
    Address:String
});
const updatepro = mongoose.model('Registration-Ambulance',updateSchema);
async function updatePro(){

const updatee = new updatepro({
    firstname:'Mandeep',
    lastname:'Singh',
    email:'mandeep@gmail.com',
    password:'345678',
    confirmpassword:'345678',
    phoneno:'4567899876',
    Address:'1345 rue champm'
});

const result1 = await updatee.save();
console.log(result);

}
 async function  updateProfile(id) {
    const profile = await updatepro.findById(id);
    if(!profile)return;

    profile.firstname="sahil"

    const result = await profile.save();
    console.log(result);
    
}


updateProfile("6053cd9ad63679302c40da2f");







 
 app.put('/api/profile/:id',(req,res)=>{
   
    

    

    
 
   
    
    });

  





