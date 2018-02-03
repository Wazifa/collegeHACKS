import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, MapsAPILoader ,GoogleMapsAPIWrapper} from '@agm/core';
import { MapComponent } from '../../map/map.component';
import {ApartmentDataService} from '../../apartment-data.service';


@Component({
  selector: 'app-roommate', 
  templateUrl: './roommate.component.html',
  styleUrls: ['./roommate.component.css'],
  providers : [ApartmentDataService]
})
export class RoommateComponent implements OnInit {
  
  items: Observable<any[]>;
  data : any;
  mapInstance : any;

  constructor(private modalService : NgbModal, private de:ApartmentDataService) {

    this.items = de.getEntries();
   }

   ngOnInit() {
     this.de.oldEntries();  // delete entries past present month / year
  }

  display( item: any, modal)
  {
    this.data = item;
    this.modalService.open(modal);
  }

  showOnMap(address)
  {
    this.mapInstance = new MapComponent();
    this.mapInstance.helper(address); 
  }

}
