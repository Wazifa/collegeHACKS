import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators, FormBuilder, NgForm, FormsModule} from "@angular/forms";


@Component({
  selector: 'app-add-textbook',
  templateUrl: './add-textbook.component.html',
  styleUrls: ['./add-textbook.component.css']
})
export class AddTextbookComponent implements OnInit {

  itemsRef : AngularFireList<any>;
  items : Observable<any []>;
  form : FormGroup;


  constructor(db : AngularFireDatabase, private fb : FormBuilder)
  {
    this.itemsRef = db.list("/hacks/textbook");

    this.form = fb.group({
      'book' : [null, Validators.required],
      'author' : [null, Validators.required],
      'edition' : [null, Validators.required],
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'price' : [null, Validators.required],
      'condition' : [null, Validators.required],
      'phone' : [null, ""],
      'desc' : [null, ""]
    });
  }

  ngOnInit() {
  }

  onSubmit(value, myForm : NgForm)
  {
    
    if (myForm.valid)
    {
      this.itemsRef.push({
        Date : Date(),
        Book : value.book,
        Author : value.author,
        Edition : value.edition,
        Name : value.name,
        Email : value.email,
        Description : value.desc,
        Condition : value.condition,
        Price : value.price, 
        Phone: value.phone
      });
      
      location.reload();
    }
  }

}
