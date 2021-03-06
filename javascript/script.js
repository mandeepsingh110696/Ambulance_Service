
var firebaseConfig = {
  apiKey: "AIzaSyB7MS5ZzX2h5BTRZltUj1Xr71UJ_tfs3Ho",
  authDomain: "mltextrecodemo.firebaseapp.com",
  databaseURL: "https://mltextrecodemo.firebaseio.com",
  projectId: "mltextrecodemo",
  storageBucket: "mltextrecodemo.appspot.com",
  messagingSenderId: "8681410553",
  appId: "1:8681410553:web:7292a9805863c7aa01b728"
};
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
	function loginn(_email,_password){
		
     firebase.database().ref("user").push({
     email:_email,
     password:_password
      });

		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(_email, _password);
		//promise.catch(e => alert(e.message));
		
		alert("Login Sucessfully");
		window.location="Home.html";
	
	}
	
		function loginnvalidate(){
		var _email = document.getElementById("email").value;
		var _pass = document.getElementById("password").value
		
		 if(_email == ""){
				document.getElementById('email').innerHTML =alert(" ** Please fill the email id` field");
				return false;
			}
			
			 else if(_email.indexOf('@') <= 0 ){
				document.getElementById('email').innerHTML =alert(" ** missing or  Invalid @  Position");
				return false;
			}
 
		/* 	else if((_email.charAt(_email.length-4)!='.') && (_email.charAt(_email.length-3)!='.')){
				document.getElementById('email').innerHTML =alert(" **missing or Invalid . Position");
				return false;
			}  */
 

	       else   if(_pass== ""){
				document.getElementById('password').innerHTML =alert(" ** Please fill the password field");
				return false;
			}
		   else	if((_pass.length <= 5) || (_pass.length > 20)) {
				document.getElementById('password').innerHTML =alert(" ** Passwords length must be between  5 and 20");
				return false;	
			}
 
			
			else
			{
				loginn(_email,_pass);
				return true;
			    
				
				
			}
		

		}
	
	function registerr(_fname,_lname,_pass,_cpass,_email,_cars,_no)
	{
		

		debugger;
	/* 	var _fname = document.getElementById("fname");
		var _lname = document.getElementById("lname");
		var _email = document.getElementById("emaill");
		var _pass = document.getElementById("pass");
		var _cpass = document.getElementById("cpass");
		var _cars = document.getElementById("cars");
		var _no = document.getElementById("no"); */
		
		
		debugger
     firebase.database().ref("users").push({
       fname :_fname,
		lname :_lname,
		emaill: _email,
		 pass:_pass,
		cpass: _cpass,
		 cars:_cars,
		 no:_no
		
      });
	  
	     const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(_email, _pass);
		promise.catch(e => alert(e.message));
		 
		 debugger
		alert("register successfully");
		login();
		
	}
	
	
	function passValues(opt){
		debugger
		var type=document.getElementById("type").innerHTML;
		var no=document.getElementById("no").innerHTML;
		var name=document.getElementById("name").innerHTML;
		var phno=document.getElementById("phno").innerHTML;
		var helper=document.getElementById("helper").innerHTML;
		var hpno=document.getElementById("hpno").innerHTML;
		
		debugger
		localStorage.setItem("typ",type);
		localStorage.setItem("noo",no);
		localStorage.setItem("nam",name);
		localStorage.setItem("phn",phno);
		localStorage.setItem("helpe",helper);
		localStorage.setItem("hpn",hpno);
		localStorage.setItem("opt",opt);
		
		
		window.location="Booking.html";
		
		return false;
	}
	
	function passValuesTwo(opt){
		
		
		debugger
	    var type2=document.getElementById("type2").innerHTML;
		var no2=document.getElementById("no2").innerHTML;
		var name2=document.getElementById("name2").innerHTML;
		var phno2=document.getElementById("phno2").innerHTML;
		var helper2=document.getElementById("helper2").innerHTML;
		var hpno2=document.getElementById("hpno2").innerHTML;
		
		
		debugger
		localStorage.setItem("typ2",type2);
		localStorage.setItem("noo2",no2);
		localStorage.setItem("nam2",name2);
		localStorage.setItem("phn2",phno2);
		localStorage.setItem("helpe2",helper2);
		localStorage.setItem("hpn2",hpno2);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	function passValuesThree(opt){
		
		
		debugger
	    var type3=document.getElementById("type3").innerHTML;
		var no3=document.getElementById("no3").innerHTML;
		var name3=document.getElementById("name3").innerHTML;
		var phno3=document.getElementById("phno3").innerHTML;
		var helper3=document.getElementById("helper3").innerHTML;
		var hpno3=document.getElementById("hpno3").innerHTML;
		
		
		debugger
		localStorage.setItem("typ3",type3);
		localStorage.setItem("noo3",no3);
		localStorage.setItem("nam3",name3);
		localStorage.setItem("phn3",phno3);
		localStorage.setItem("helpe3",helper3);
		localStorage.setItem("hpn3",hpno3);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	
	function passValuesFour(opt){
		
		
		debugger
	    var type4=document.getElementById("type4").innerHTML;
		var no4=document.getElementById("no4").innerHTML;
		var name4=document.getElementById("name4").innerHTML;
		var phno4=document.getElementById("phno4").innerHTML;
		var helper4=document.getElementById("helper4").innerHTML;
		var hpno4=document.getElementById("hpno4").innerHTML;
		
		
		debugger
		localStorage.setItem("typ4",type4);
		localStorage.setItem("noo4",no4);
		localStorage.setItem("nam4",name4);
		localStorage.setItem("phn4",phno4);
		localStorage.setItem("helpe4",helper4);
		localStorage.setItem("hpn4",hpno4);
		localStorage.setItem("opt",opt);
		window.location="Booking.html";
		
		return false;
	}
	
	function passValuesFive(opt){
		
		
		debugger
		    var type5=document.getElementById("type5").innerHTML;
		var no5=document.getElementById("no5").innerHTML;
		var name5=document.getElementById("name5").innerHTML;
		var phno5=document.getElementById("phno5").innerHTML;
		var helper5=document.getElementById("helper5").innerHTML;
		var hpno5=document.getElementById("hpno5").innerHTML;
		
		
		debugger
		localStorage.setItem("typ5",type5);
		localStorage.setItem("noo5",no5);
		localStorage.setItem("nam5",name5);
		localStorage.setItem("phn5",phno5);
		localStorage.setItem("helpe5",helper5);
		localStorage.setItem("hpn5",hpno5);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	function passValuesSix(opt){
		
		
		debugger
	    var type6=document.getElementById("type6").innerHTML;
		var no6=document.getElementById("no6").innerHTML;
		var name6=document.getElementById("name6").innerHTML;
		var phno6=document.getElementById("phno6").innerHTML;
		var helper6=document.getElementById("helper6").innerHTML;
		var hpno6=document.getElementById("hpno6").innerHTML;
		
		
		debugger
		localStorage.setItem("typ6",type6);
		localStorage.setItem("noo6",no6);
		localStorage.setItem("nam6",name6);
		localStorage.setItem("phn6",phno6);
		localStorage.setItem("helpe6",helper6);
		localStorage.setItem("hpn6",hpno6);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	
	function passValuesSeven(opt){
		
		
		debugger
		    var type7=document.getElementById("type7").innerHTML;
		var no7=document.getElementById("no7").innerHTML;
		var name7=document.getElementById("name7").innerHTML;
		var phno7=document.getElementById("phno7").innerHTML;
		var helper7=document.getElementById("helper7").innerHTML;
		var hpno7=document.getElementById("hpno7").innerHTML;
		
		
		debugger
		localStorage.setItem("typ7",type7);
		localStorage.setItem("noo7",no7);
		localStorage.setItem("nam7",name7);
		localStorage.setItem("phn7",phno7);
		localStorage.setItem("helpe7",helper7);
		localStorage.setItem("hpn7",hpno7);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	
	function passValuesEight(opt){
		
		
		debugger
	    var type8=document.getElementById("type8").innerHTML;
		var no8=document.getElementById("no8").innerHTML;
		var name8=document.getElementById("name8").innerHTML;
		var phno8=document.getElementById("phno8").innerHTML;
		var helper8=document.getElementById("helper8").innerHTML;
		var hpno8=document.getElementById("hpno8").innerHTML;
		
		
		debugger
		localStorage.setItem("typ8",type8);
		localStorage.setItem("noo8",no8);
		localStorage.setItem("nam8",name8);
		localStorage.setItem("phn8",phno8);
		localStorage.setItem("helpe8",helper8);
		localStorage.setItem("hpn8",hpno8);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function sendContactDataToFirebase(_name,_lastname,_email,_date,_country,_message,_reasonmessage)
	{
		
		debugger
     firebase.database().ref("UserContactusInfo").push({
       name :_name,
		lastname :_lastname,
		email: _email,
		 date:_date,
		country: _country,
		 message:_message,
		 reasonmessage:_reasonmessage
		
      });
	  
	   
		 
		 debugger
		alert("Your Information send  successfully");
		
		
	}
	
		function sendBookingDataToFirebase(_namecar,_engine,_speed,_milli,_age,_depo,_customername,_customeremail,_customerphone)
	{
		var fireref=firebase.database().ref().child("UserBookingInfo");
		
		debugger
     firebase.database().ref("UserBookingInfo").push({
	 namecar:_namecar,
	 engine:_engine,
	 speed:_speed,
	 milli:_milli,
	 age:_age,
	 depo:_depo,
     customername :_customername,
	 customeremail: _customeremail,
     customerphone:_customerphone
		
      });
	  
	  fireref.child("UserBookingInfo").set("New Booking",function(error){
		  if(error)
		  {
			  alert("Your Booking has been unsuccessful"+error);
		  }
		  else{
			  alert("Your Booking has been successful");
			  redirectToThankYou();
		  }
	  });
	   
		 
		 
		
	
		
		
	}
	
	function redirectToThankYou()
	{
			
		window.location.href="Thankyou.html"
	}
	
	function redirectToPayment()
	{
	  location.href="paymentpage.html"		
	}

	
		function validation(){

		/* 	var user = document.getElementById('user').value;
			var pass = document.getElementById('pass').value;
			var confirmpass = document.getElementById('conpass').value;
			var mobileNumber = document.getElementById('mobileNumber').value;
			var emails = document.getElementById('emails').value;
 */

			
		var _fname = document.getElementById("fname").value;
		var _lname = document.getElementById("lname").value;
		var _pass = document.getElementById("pass").value;
		var _cpass = document.getElementById("cpass").value;
		var _email = document.getElementById("emaill").value;
		var _cars = document.getElementById("cars").value;
		var _no = document.getElementById("no").value;
		
		
		
		
				if(_fname == ""){
				document.getElementById('fname').innerHTML =alert(" ** Please fill the Firstname field");
				return false;
			}
			else if((_fname.length <= 2) || (_fname.length > 20)) {
				document.getElementById('fname').innerHTML = alert("**  Firstname length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_fname)){
				document.getElementById('fname').innerHTML =alert(" ** only characters are allowed in Firstname field" );
				return false;
			} 


			else if(_lname == ""){
				document.getElementById('lname').innerHTML =alert(" ** Please fill the lastname field");
				return false;
			}
			 else if((_lname.length <= 2) || (_lname.length > 20)) {
				document.getElementById('lname').innerHTML = alert("**  lastname length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_lname)){
				document.getElementById('lname').innerHTML =alert(" ** only characters are allowed in lastname field" );
				return false;
			}
			 
			else if(_email == ""){
				document.getElementById('emaill').innerHTML =alert(" ** Please fill the email id` field");
				return false;
			}
			 else if(_email.indexOf('@') <= 0 ){
				document.getElementById('emaill').innerHTML =alert(" ** @ Invalid Position");
				return false;
			}
 
			else if((_email.charAt(_email.length-4)!='.') && (_email.charAt(_email.length-3)!='.')){
				document.getElementById('emaill').innerHTML =alert(" ** . Invalid Position");
				return false;
			} 
 

	    else   if(_pass== ""){
				document.getElementById('pass').innerHTML =alert(" ** Please fill the password field");
				return false;
			}
		 else	if((_pass.length <= 5) || (_pass.length > 20)) {
				document.getElementById('pass').innerHTML =alert(" ** Passwords length must be between  5 and 20");
				return false;	
			}
 

			else if(_cpass == ""){
				document.getElementById('cpass').innerHTML =alert(" ** Please fill the confirmpassword field");
				return false;
			}
			
			else if(_pass!=_cpass){
				document.getElementById('cpass').innerHTML =alert(" ** Password does not match the confirm password");
				return false;
			}

			
	
		
			 var e = document.getElementById("cars");
                var strUser = e.options[e.selectedIndex].value;

                var strUser1 = e.options[e.selectedIndex].text;
                if(strUser==0)
                {
                    alert("Please select a car");
					return false;
                }
           
			
			else if(_no == ""){
				document.getElementById('no').innerHTML =alert(" ** Please fill the License Number field");
				return false;
			}
			 else if(_no.length!=8){
				document.getElementById('no').innerHTML =alert(" ** License Number must be 8 digits only");
				return false;
			} 
			else
			{
				registerr(_fname,_lname,_pass,_cpass,_email,_cars,_no);
				
			
				return true;
			    
				
				
			}
		

		}
		
		
		
		function productDetail()
		{
			window.location="Booknow.html"
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		function validationContactUs(){

	

			
		var _name = document.getElementById("namee").value;
		var _lastname = document.getElementById("lastname").value;
		var _email = document.getElementById("email").value;
		var _date = document.getElementById("date").value;
		var _country = document.getElementById("country").value;
		var _message = document.getElementById("message").value;
		var _reasonmessage = document.getElementById("reasonmessage").value;
		
		
		
		
				if(_name == ""){
				document.getElementById('namee').innerHTML =alert(" ** Please fill the Name field");
				return false;
			}
			else if((_name.length <= 2) || (_name.length > 20)) {
				document.getElementById('namee').innerHTML = alert("** Name length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_name)){
				document.getElementById('namee').innerHTML =alert(" ** only characters are allowed in Name field" );
				return false;
			} 


			else if(_lastname == ""){
				document.getElementById('lastname').innerHTML =alert(" ** Please fill the lastname field");
				return false;
			}
			 else if((_lastname.length <= 2) || (_lastname.length > 20)) {
				document.getElementById('lastname').innerHTML = alert("**  lastname length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_lastname)){
				document.getElementById('lastname').innerHTML =alert(" ** only characters are allowed in lastname field" );
				return false;
			}
			 
			else if(_email == ""){
				document.getElementById('email').innerHTML =alert(" ** Please fill the email id` field");
				return false;
			}
			 else if(_email.indexOf('@') <= 0 ){
				document.getElementById('email').innerHTML =alert(" ** @ Invalid Position");
				return false;
			}
 
			else if((_email.charAt(_email.length-4)!='.') && (_email.charAt(_email.length-3)!='.')){
				document.getElementById('email').innerHTML =alert(" ** . Invalid Position");
				return false;
			} 
			
				else if(_date == ""){
				document.getElementById('date').innerHTML =alert(" ** Please fill the Date field");
				return false;
			}
		
			 var eff = document.getElementById("country");
			 debugger
                var strUserr = eff.options[eff.selectedIndex].value;

                var strUser2 = eff.options[eff.selectedIndex].text;
                if(strUserr==0)
                {
                    alert("Please select a country");
					return false;
                }
           
			
			else if(_message == ""){
				document.getElementById('message').innerHTML =alert(" ** Please fill the Message field");
				return false;
			}
			 else if(_reasonmessage == ""){
				document.getElementById('reasonmessage').innerHTML =alert(" ** Please fill the Reason Message field");
				return false;
			}
			else
			{
				sendContactDataToFirebase(_name,_lastname,_email,_date,_country,_message,_reasonmessage);
				return true;
			    
				
				
			}
		

		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		function validationBookingInfo(){
			/* 	if(_customername == ""){
				document.getElementById('cname').innerHTML =alert(" ** Please fill the Customer Name field");
				return false;
			}
			else if((_customername.length <= 2) || (_customername.length > 20)) {
				document.getElementById('cname').innerHTML = alert("** Customer Name length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_customername)){
				document.getElementById('cname').innerHTML =alert(" ** only characters are allowed in Customer Name field" );
				return false;
			} 
			 
			else if(_customeremail == ""){
				document.getElementById('cemail').innerHTML =alert(" ** Please fill the Customer Email id` field");
				return false;
			}
			 else if(_customeremail.indexOf('@') <= 0 ){
				document.getElementById('cemail').innerHTML =alert(" ** @ Missing or  Invalid Position");
				return false;
			}
 
			else if((_customeremail.charAt(_customeremail.length-4)!='.') && (_customeremail.charAt(_customeremail.length-3)!='.')){
				document.getElementById('cemail').innerHTML =alert(" ** . Missing or Invalid Position");
				return false;
			} 
			else if(_customerphone == ""){
				document.getElementById('cphone').innerHTML =alert(" ** Please fill the Customer Phone Number field");
				return false;
			}
			 else if(_customerphone.length!=10){
				document.getElementById('cphone').innerHTML =alert(" ** Customer Phone Number must be 10 digits only");
				return false;
			} 	
			
			else
			{ */
				  var _type=document.getElementById("type").innerHTML;
		var _no=document.getElementById("no").innerHTML;
		var _hpno=document.getElementById("hpno").innerHTML;
		/* var _name=document.getElementById("name").innerHTML;
		var _phno=document.getElementById("phno").innerHTML;
		var _helper=document.getElementById("helper").innerHTML;
		var _hpno=document.getElementById("hpno").innerHTML;
		var _pname = document.getElementById("pname").value;
		var _pemail = document.getElementById("pemail").value;
		var _pphone = document.getElementById("pphone").value;
		var _pickup = document.getElementById("pickup").value;
		var _dest = document.getElementById("dest").value;
		var _dat = document.getElementById("dat").value;
		var _tim = document.getElementById("tim").value;
		 */
		
		
	/* 	var genderarr= Array.from(document.getElementByName("gender").value);
		
		var genderr;
		for(var i=1;i<=genderarr.length;i++){
			if(genderarr[i].checked){
				genderr=genderarr[i].value;
				break;
			}
		}
		
		
	    var patientarr= Array.from(document.getElementByName("patient").value);
		
		var patientt;
		for(var i=1;i<=patientarr.length;i++){
			if(patientarr[i].checked){
				patientt=patientarr[i].value;
				break;
			}
		}
		
		var _condition = document.getElementById("condition").value;
		
		var _req = document.getElementById("req").value;
		
		 */
		
		
			 
		localStorage.setItem("type",_type);
		localStorage.setItem("no",_no);
			localStorage.setItem("hpno",_hpno);
		/* localStorage.setItem("speed",_speed);
		localStorage.setItem("milli",_milli);
		localStorage.setItem("age",_age);
		localStorage.setItem("depo",_depo);
		localStorage.setItem("customername",_customername);
		localStorage.setItem("customeremail",_customeremail);
		localStorage.setItem("customerphone",_customerphone);  */
		
		
		
		window.location="paymentpage.html";
		
		return false;
	}
	
	   function validationPayment(){
		   
				  var _aa=document.getElementById("aa").innerHTML;
		var _bb=document.getElementById("bb").innerHTML;
		
		var _price=document.getElementById("price").innerHTML;
		
		
		
		localStorage.setItem("aa",_aa);
		localStorage.setItem("bb",_bb);
		localStorage.setItem("price",_price);
		/* localStorage.setItem("speed",_speed);
		localStorage.setItem("milli",_milli);
		localStorage.setItem("age",_age);
		localStorage.setItem("depo",_depo);
		localStorage.setItem("customername",_customername);
		localStorage.setItem("customeremail",_customeremail);
		localStorage.setItem("customerphone",_customerphone);  */
		
		
		
		window.location="Thankyou.html";
		
		return false;
		
		
		
		   
	   }
				//sendBookingDataToFirebase(_namecar,_engine,_speed,_milli,_age,_depo,_customername,_customeremail,_customerphone);
				//return true;
			    
				
				
			
		

		
		
	
	