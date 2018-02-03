import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import {FormControl, FormGroup, Validators, FormBuilder, NgForm, FormsModule} from "@angular/forms";


@Component({
  selector: 'app-add-roommate',
  templateUrl: './add-roommate.component.html',
  styleUrls: ['./add-roommate.component.css']
})
export class AddRoommateComponent implements OnInit {

  form : FormGroup;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  valid : boolean = true;

  constructor(db : AngularFireDatabase, fb : FormBuilder) { 
    
    this.itemsRef = db.list("/hacks/roommate");

    this.form = fb.group({
      'apartment' : [null, Validators.required],
      'address' : [null, Validators.required],
      'city' : [null, Validators.required],
      'state' : [null, Validators.required],
      'zip' : [null, Validators.required],
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'rent' : [null, Validators.required],
      'utilities' : [null, Validators.required],
      'date' : [null, Validators.required],
      'phone' : [null, ""],
      'desc' : [null, ""]
    });


  }

  ngOnInit() {

  }

  onSubmit(form, myForm : NgForm)
  {
    if(myForm.valid)
    {
      this.itemsRef.push({
        Apt : form.apartment,
        Address : form.address + ", "+ form.city + " " + form.state + " " + form.zip,
        Rent : form.rent,
        Utilities : form.utilities,
        Name : form.name,
        Email : form.email,
        description : form.desc,
        Date : form.date,
        Phone : form.phone
      });
      location.reload();
    }
  }
 

}
