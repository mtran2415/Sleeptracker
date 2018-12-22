/* from the Stanford Sleepiness Scale */
/* https://web.stanford.edu/~dement/sss.html */

import { SleepData } from './sleep-data';

export class StanfordSleepinessData extends SleepData {
	public static ScaleValues = [undefined,//Sleepiness scale starts at 1
	'Feeling active, vital, alert, or wide awake', //1
	'Functioning at high levels, but not at peak; able to concentrate', //2
	'Awake, but relaxed; responsive but not fully alert', //3
	'Somewhat foggy, let down', //4
	'Foggy; losing interest in remaining awake; slowed down', //5
	'Sleepy, woozy, fighting sleep; prefer to lie down', //6
	'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7

	private loggedValue:number;
	private sleepReason:string;

	constructor(loggedValue:number = 1, sleepReason:string = "", loggedAt:Date = new Date()) {
		super();
		this.loggedValue = loggedValue;
		this.sleepReason = sleepReason;
		this.loggedAt = loggedAt;
	}

	summaryString():string {
		return this.loggedValue + " (" + StanfordSleepinessData.ScaleValues[this.loggedValue] + ")";
	}

	dateString():string {
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});
	}

	sleepReasonString() {
		return this.sleepReason;
	}

	toObject():{} {
        return {'id':this.id,
		'loggedValue':this.loggedValue,
		'loggedAt': this.loggedAt,
		'sleepReason': this.sleepReason
		}
	}
	
	fromObject(object:{}) {
		this.id = object['id'];
		this.loggedValue = object['loggedValue'];
		this.loggedAt = new Date(object['loggedAt'].seconds*1000);
		this.sleepReason = object['sleepReason'];
	}
}
