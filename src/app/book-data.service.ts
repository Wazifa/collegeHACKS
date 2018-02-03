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


}
