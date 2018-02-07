import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';


@Injectable()
export class BookDataService {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(db : AngularFireDatabase) { 
    this.itemsRef = db.list('/hacks/textbook');
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  retrieveData()
  {
    return this.items;
  }

  deleteOldEntries() // delete an entry 30 days after its post
  {
    this.items.forEach(element=>{
      element.map(entry=>{ 
        var date = new Date(entry.Date);
        var next_month = date.getMonth() + 1;

        if (new Date().getFullYear() > date.getFullYear())
        {
          this.itemsRef.remove(entry.key);
        }

        if (new Date().getMonth() === next_month)
        {
          if (new Date().getDate() > date.getDate())
          {
            this.itemsRef.remove(entry.key);
          }
         
        }
         });
      });
  }


}
