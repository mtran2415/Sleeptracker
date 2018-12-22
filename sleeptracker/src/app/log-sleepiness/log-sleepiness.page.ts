import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-log-sleepiness',
  templateUrl: './log-sleepiness.page.html',
  styleUrls: ['./log-sleepiness.page.scss'],
})
export class LogSleepinessPage implements OnInit {
  sleep_rating:string = "1";
  sleep_reason:string;
  previousLog:StanfordSleepinessData;

  constructor(public sleepService:SleepService,
    public alertController: AlertController,
    public firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  logSleepData() {
		var log = new StanfordSleepinessData(parseInt(this.sleep_rating), this.sleep_reason);
    this.previousLog = log;
    this.firebaseService.addSleepinessLog(log);
  }
}
