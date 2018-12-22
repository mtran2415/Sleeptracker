import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { FirebaseService } from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-logged-data',
  templateUrl: './view-logged-data.page.html',
  styleUrls: ['./view-logged-data.page.scss'],
})
export class ViewLoggedDataPage implements OnInit {
	overnightBool:boolean = true;
	sleepinessBool:boolean = true;

	constructor(public sleepService:SleepService,
		public firebaseService:FirebaseService) {
		 }

	ngOnInit() {
		this.firebaseService.updateOvernightSleepData();
		this.firebaseService.updateSleepinessData();
	}

	get overnightSleepData() {
		this.sleepService.sortData();
		return SleepService.AllOvernightData;
	}

	get sleepinessData() {
		this.sleepService.sortData();
		return SleepService.AllSleepinessData;
	}

	displayOvernightLogs() {
		if(this.overnightBool) {
			this.overnightBool = false;
			document.getElementById('displayOvernight').innerHTML= "Show Overnight Logs";
		}
		else {
			this.overnightBool = true;
			document.getElementById('displayOvernight').innerHTML= "Hide Overnight Logs";
		}
	}

	displaySleepinessLogs() {
		if(this.sleepinessBool) {
			this.sleepinessBool = false;
			document.getElementById('displaySleepiness').innerHTML= "Show Sleepiness Logs";
		}
		else {
			this.sleepinessBool = true;
			document.getElementById('displaySleepiness').innerHTML= "Hide Sleepiness Logs";
		}
	}
}
