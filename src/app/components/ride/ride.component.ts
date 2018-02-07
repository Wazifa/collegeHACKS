import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RidesDataService} from '../../rides-data.service';
import {MapService} from '../../map.service';
import {AppModule} from '../../app.module';

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
  message : any;

  constructor(private modalService: NgbModal, private rd : RidesDataService, private ms : MapService)
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
  private showOnMap(address_start, address_dest, modal)
  {
    this.ms.showRouteForRide(address_start, address_dest);
    
    // this.ms.currentMessage.subscribe(message => this.message = message);
    // console.log(this.message);
    this.modalService.open(modal);
  }

}
