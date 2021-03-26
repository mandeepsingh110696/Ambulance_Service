class Booking {
	constructor(type,no,hpno,name,email,phone,pickup,dest,dat,tim,gender,patient,condition,req) {
        this.type = type;
		this.no = no;
		this.hpno=hpno;
		this.name=name;
		this.email = email;
		this.phone= phone;
		this.pickup = pickup;
		this.dest= dest;
		this.dat = dat;
		this.tim=tim;
		this.gender = gender;
		this.patient=patient;
		this.condition = condition;
		this.req=req;
		
		
		
		
		
		
	}

	static fromRow(row) {
		return new  Booking(row.type, row.no,row.hpno,row.name, row.email, row.phone,row.pickup,row.dest,row.dat,row.tim,row.gender,row.patient,row.condition,row.req);
	}

	toString() {
		console.log(`Type[${type}] No [${no}] Hpno[${hpno}],Name[${name}] Email[${email}]Phone[${phone}]Pickup[${pickup}] Dest[${dest}] Dat[${dat}] Tim[${tim}] Gender[${gender}] Patient[${patient}] Conditon[${condition}] Req[${req}]`)
	}
}


