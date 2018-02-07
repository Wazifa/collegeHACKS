import { Component, OnInit, Optional } from '@angular/core';
import { AgmCoreModule, MapsAPILoader ,GoogleMapsAPIWrapper, NoOpMapsAPILoader} from '@agm/core';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {MapService} from '../map.service';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers : [MapService]
})

export class MapComponent implements OnInit {

  map : any;
  
  constructor(private ms: MapService) { 
    
  }

  ngOnInit() {
    
    this.initMap();    
  }

  /*
   * Displays an initial map
  */
  initMap() 
  {
    
     this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: 41.850033, lng: -87.6500523}
    }); 
  }

}
