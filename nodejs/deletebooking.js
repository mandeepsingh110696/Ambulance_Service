






const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Ambulance-Service')
.then(()=>console.log('Connected to Db'))
.catch(err=>console.error('Error',err))

const express = require('express');
const app = express();


const bookingSchema= new mongoose.Schema({
     AmbulanceType:String,
     AmbulanceNumber:String,
     DriverName:String,
     DriverPhoneno:String,
     HelperName: String,
     Price: String,
     PatientName:String, 
     Email:String,
     Phoneno:String,
     PickupAddress:String,
     DestinationAddress:String,
     Dateofpickup:String,
     Timeofpickup:String,
    Patientgender:String,
    requesterrelationship:String,
    Patientcondition:String,           
    TimeArrivalRequest:String

});
const bookingModel = mongoose.model('Booking-Ambulance',bookingSchema);

module.exports=bookingModel;
async function bookAmbulance(){


app.post("/booking",function(req,res,next){
const booking = new bookingModel({
     AmbulanceType: 'Collective Ambulance',
     AmbulanceNumber: '756JWB',
     DriverName: 'Steven Smith',
     DriverPhoneno: '4567899876',
     HelperName:- 'Kane William',
     Price:- '550$',
     PatientName:'Mandeep', 
     Email:'mandeep@gmail.com',
     Phoneno:'4567899876',
     PickupAddress:'rue champ',
     DestinationAddress:'rue fturr',
     Dateofpickup:'13',
     Timeofpickup:'4:00pm',
    Patientgender:'male',
    requesterrelationship:'brother',
    Patientcondition:'critical',           
    TimeArrivalRequest:'4:00pm'
   
});
});
const result = await booking.save();
console.log(result);

}

  

//bookAmbulance();




async function  removeBooking(id) {
    const course = await bookingModel.findByIdAndRemove(id);
    console.log(course);
    
    
}
removeBooking("60551d0ca2bb3539a82ea7cb");

app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id===parseInt(req.params.id));
    if(!course){
        res.status(404).send("Course not found");
 
    }
  

        
    
    
  
  });