import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApartmentDataService {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  

  constructor(db: AngularFireDatabase) { 

    this.itemsRef = db.list('/hacks/roommate');
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

  }

  getEntries()
  {
    return this.items;
  }

  // delete entries whose start date is past present month / year
  oldEntries()
  {
    this.items.forEach(element=>{
      element.map(entry=>{
        var month = new Date().getMonth() +1;
        
        if (new Date().getFullYear() > entry.Date.year)
        {
          this.itemsRef.remove(entry.key);
        }
        if (new Date().getFullYear() === entry.Date.year)
        {
          if (month > entry.Date.month)
          {
            this.itemsRef.remove(entry.key);
          }
        }
     
        });
      });
  }
}
