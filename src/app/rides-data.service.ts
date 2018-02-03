import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RidesDataService {

  ridesRef: AngularFireList<any>;
  rides: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.ridesRef = db.list('/hacks/ride');
    this.rides = this.ridesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
   }

   getEntries()
   {
     return this.rides;
   }
 
   // delete entries whose start date is past present month / year
   oldEntries()
   {
      this.rides.forEach(element=>{
      element.map(entry=>{ 
        var month = new Date().getMonth() +1;

        if (new Date().getFullYear() > entry.Date.year)
        {
           this.ridesRef.remove(entry.key);
        }
        if (new Date().getFullYear() === entry.Date.year)
        {
          if (month > entry.Date.month)
          {
             this.ridesRef.remove(entry.key);
          }
        }
         });
      });
   }

}
