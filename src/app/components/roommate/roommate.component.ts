import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApartmentDataService} from '../../apartment-data.service';
import {MapService} from '../../map.service';

@Component({
  selector: 'app-roommate', 
  templateUrl: './roommate.component.html',
  styleUrls: ['./roommate.component.css'],
  providers : [ApartmentDataService, MapService]
})
export class RoommateComponent implements OnInit {
  
  items: Observable<any[]>;
  data : any;
  mapInstance : any;

  constructor(private modalService : NgbModal, private de:ApartmentDataService, private ms : MapService) {

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
    this.ms.showApartment(address);
  }

}
