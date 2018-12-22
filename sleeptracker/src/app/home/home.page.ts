import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	start_sleep:string;
	end_sleep:string;
	day:string;
	previousLog:OvernightSleepData;

	constructor(public sleepService:SleepService,
		public alertController: AlertController,
		public firebaseService:FirebaseService ) {
	}

	ngOnInit() {
	}

	logOvernightData() {
		if(this.start_sleep != undefined && this.end_sleep != undefined && this.day != undefined) {
			var start = new Date();
			var end = new Date();

			var startSplit = this.start_sleep.split(':');
			var endSplit = this.end_sleep.split(':');
			var daySplit = this.day.split('-');

			start.setHours(parseInt(startSplit[0]));
			start.setMinutes(parseInt(startSplit[1]));
			start.setFullYear(parseInt(daySplit[0]));
			start.setMonth(parseInt(daySplit[1], 10) - 1);
			start.setDate(parseInt(daySplit[2], 10));

			end.setHours(parseInt(endSplit[0]));
			end.setMinutes(parseInt(endSplit[1]));
			end.setFullYear(parseInt(daySplit[0]));
			end.setMonth(parseInt(daySplit[1], 10) - 1);
			end.setDate(parseInt(daySplit[2], 10));

			var log = new OvernightSleepData(start, end);
			this.previousLog = log;

			this.firebaseService.addSleepLog(log);
		}
	}

	async checkMissing() {
		if(this.start_sleep == undefined || this.end_sleep == undefined || this.day == undefined) {
			const confirm = await this.alertController.create({
				message: 'Please enter a value for each field!',
				buttons: ['OK']
			});
		
			await confirm.present();
		}
	}
}
