class CancelBooking {
	constructor(email,pphno) {
        this.email= email;
		this.pphno=pphno;
		
	}

	static fromRow(row) {
		return new  CancelBooking(row.email,row.pphno);
	}

	toString() {
		console.log(` Email[${email}]PPhno[${pphno}]`)
	}
}


