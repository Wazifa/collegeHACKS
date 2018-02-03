import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import {FormControl, FormGroup, Validators, FormBuilder, NgForm, FormsModule} from "@angular/forms";

import {MapService} from '../map.service';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson, FeatureCollection } from '../map';

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
          
  styleUrls: ['./add-ride.component.css'],
  providers : [MapService]
})
export class AddRideComponent implements OnInit {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  form : FormGroup;
  
  constructor(db : AngularFireDatabase, private fb : FormBuilder) { 
    this.itemsRef = db.list("/hacks/ride");

    this.form = fb.group({
      'start_street' : [null, Validators.required],
      'start_city' : [null, Validators.required],
      'start_state' : [null, Validators.required],
      'start_zip' : [null, Validators.required],
      'dest_street' : [null, Validators.required],
      'dest_city' : [null, Validators.required],
      'dest_state' : [null, Validators.required],
      'dest_zip' : [null, Validators.required],
      'date' : [null, Validators.required],
      'time' : [null, Validators.required],
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'phone' : [null, ""]
    });
    
  }

  ngOnInit() {
    
  }


  onSubmit(form, myForm : NgForm)
  {
    if(myForm.valid)
    {
      this.databasePush(form);
    }
  
  }


  databasePush(form)
  {
    this.itemsRef.push({
        startStreet: form.start_street,
        startCity : form.start_city,
        startState : form.start_state,
        startZip : form.start_zip,
        destinationStreet : form.dest_street,
        destinationCity : form.dest_city,
        destinationState : form.dest_state,
        destinationZip : form.dest_zip,
        Date : form.date,
        Time : form.time,
        Name : form.name,
        Email : form.email,
        Phone : form.phone
      });
      location.reload();
  }

}
