import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Observable } from 'rxjs';
import { SleepService } from '../services/sleep.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  overnightCollection:AngularFirestoreCollection;
  sleepinessCollection:AngularFirestoreCollection;

  constructor(public sleepService:SleepService, db:AngularFirestore) {
    this.overnightCollection = db.collection('overnight-sleep-data');
    this.sleepinessCollection = db.collection('sleepiness-data');
  }

  addSleepLog(overnightSleepLog:OvernightSleepData) {
    //TODO: implement this function to add sleep logs
    this.overnightCollection.add(overnightSleepLog.toObject()).then((reference) => {
      console.log("Reference to added data, kind of like a URL");
      console.log(reference);
      });
  }

  addSleepinessLog(sleepinessLog:StanfordSleepinessData) {
    this.sleepinessCollection.add(sleepinessLog.toObject()).then((reference) => {
      console.log("Reference to added data, kind of like a URL");
      console.log(reference);
      });
  }

  deleteDocument(reference:string) {
    this.overnightCollection.doc(reference).delete().then(() => {
      console.log('The document at ' + reference + 'no longer exists');
    });
  }

  getSleepLogs():Observable<DocumentData[]> {
    //TODO: implement this function to retrieve sleep logs
    return this.overnightCollection.valueChanges();
  }

  getSleepinessLogs():Observable<DocumentData[]> {
  	//TODO: implement this function to retrieve sleep logs
    return this.sleepinessCollection.valueChanges();
  }

  // function for updating the SleepService arrays for the sleep data with the latest data from Firebase
  updateOvernightSleepData() {
		this.getSleepLogs().subscribe((array) => {
      array.forEach(function(element){
        if(element != undefined) {
            var flag = true;

            
            
            for(var i = 0; i < SleepService.AllOvernightData.length; i++) {              
              if(SleepService.AllOvernightData[i].id == element.id)
                flag = false;
            }

            var log = new OvernightSleepData(new Date(), new Date());
            log.fromObject(element);

            if(flag) {
              this.sleepService.logOvernightData(log);
            }
        }
      }, this);
    });
  }

  // function for updating the SleepService arrays for the sleep data with the latest data from Firebase
  updateSleepinessData() {
		this.getSleepinessLogs().subscribe((array) => {
      array.forEach(function(element){
        if(element != undefined) {
            var flag = true;
            
            for(var i = 0; i < SleepService.AllSleepinessData.length; i++) {              
              if(SleepService.AllSleepinessData[i].id == element.id)
                flag = false;
            }

            var log = new StanfordSleepinessData(-1, "", new Date());
            log.fromObject(element);

            if(flag) {
              this.sleepService.logSleepinessData(log);
            }
        }
      }, this);
    });
  }
  
  
	
}
