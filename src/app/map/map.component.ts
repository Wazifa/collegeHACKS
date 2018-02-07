import { Component, OnInit, Optional, AfterViewInit } from '@angular/core';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {MapService} from '../map.service';
import {AppModule} from '../app.module';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers : [MapService]
})

export class MapComponent implements OnInit {

  
  constructor(private ms: MapService) { 
    
  }

  ngOnInit() {
    this.ms.initMap();  // display an initial map
  }

}
