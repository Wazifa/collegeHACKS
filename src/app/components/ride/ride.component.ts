import { Component, OnInit } from '@angular/core';

import {AngularFireList, AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from '../../map/map.component';
import {RidesDataService} from '../../rides-data.service';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css'],
  providers: [RidesDataService]
})
export class RideComponent implements OnInit {

  rides: Observable<any[]>;
  data : any;
  mapInstance: any;
                                                          
  constructor(private modalService: NgbModal, private rd : RidesDataService)
  {
    this.rides = rd.getEntries();
  }

  ngOnInit() {
    this.rd.oldEntries();
  }

  display(item : any, modal)
  {
    this.data = item;
    this.modalService.open(modal);
  }

  // show the route
  private showOnMap(address_start, address_dest)
  {
    this.mapInstance = new MapComponent();
    this.mapInstance.initMapShowRoute(address_start, address_dest);
  }

}
