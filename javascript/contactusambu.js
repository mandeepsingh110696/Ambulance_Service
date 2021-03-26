class ContactUs {
	constructor(name, lastname,email,date, country, message,reasonmessage) {
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.date= date;
		this.country = country;
		this.message = message;
		this.reasonmessage = reasonmessage;
		
		
		
	}

	static fromRow(row) {
		return new  ContactUs(row.name, row.lastname,row.email,row.date, row.country, row.message,row.reasonmessage);
	}

	toString() {
		console.log(`name[${name}] Lname [${lastname}] Email[${email}],Date [${date}] Country [${country}]Message [${message}]  Reasonmessage [${reasonmessage}]`)
	}
}


