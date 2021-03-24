class Registerambulance {
	constructor(fname, lname,email,pass, cpass, phno,address) {
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.pass = pass;
		this.cpass = cpass;
		this.phno = phno;
		this.address = address;
		
	}

	static fromRow(row) {
		return new  Registerambulance(row.fname, row.lname,row.email,row.pass, row.cpass, row.phno,row.address);
	}

	toString() {
		console.log(`Fname[${fname}] Lname [${lname}] Email[${email}],Pass [${pass}] Cpass [${cpass}] Phno [${phno}]Address [${address}]`)
	}
}


