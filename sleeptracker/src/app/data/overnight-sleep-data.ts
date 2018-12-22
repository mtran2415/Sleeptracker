import { SleepData } from './sleep-data';
import { FirebaseFirestore } from '@angular/fire';

export class OvernightSleepData extends SleepData {
	private sleepStart:Date;
	private sleepEnd:Date;
	private logString:string;

	constructor(sleepStart:Date, sleepEnd:Date) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}

	getSleepStart():Date {
		return this.sleepStart;
	}

	summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = Math.abs(sleepEnd_ms - sleepStart_ms);
		    
		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes";
	}

	timeRange():string {
		return this.sleepStart.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }) + " - " +
			this.sleepEnd.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
	}

	getLoggedTime():string {
		return "Logged on " + this.loggedAt.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
	}

	dateString():string {
		return "On " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) + ",";
	}

	toObject():{} {
        return {'id':this.id,
		'sleepStart':this.sleepStart,
		'sleepEnd':this.sleepEnd,
		'loggedAt': this.loggedAt
		};
	}
	
	fromObject(object:{}) {
		this.id = object['id'];
		this.sleepStart = new Date(object['sleepStart'].seconds*1000);
		this.sleepEnd = new Date(object['sleepEnd'].seconds*1000);
		this.loggedAt = new Date(object['loggedAt'].seconds*1000);
		this.logString = object['loggedAt'];
	}
}
