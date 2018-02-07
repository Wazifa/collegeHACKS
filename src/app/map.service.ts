
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { AgmCoreModule, MapsAPILoader ,GoogleMapsAPIWrapper, NoOpMapsAPILoader} from '@agm/core';
import {AppModule} from './app.module';

declare var google : any;

@Injectable()
export class MapService {
  
  map : any;
  geocoder: any;
  infoWindow : any;
  alert : String;

  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  constructor() { 
    
    this.alert = "";
  }

  initMap()
  {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: 41.850033, lng: -87.6500523}
    });  
  }

  /*
   * Locates the apartment on the map
   * Displays place details on info window 
  */
  showApartment(address)
  {
    var resultsMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 18
    }); 

    this.geocoder = new google.maps.Geocoder();
    
  this.geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location); 
      
      // get the details about the place
      var infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(resultsMap);
      
      service.getDetails({
        placeId : results[0].place_id
      }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          var marker = new google.maps.Marker({
            map: resultsMap,
            position: place.geometry.location
          });
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
              
              place.formatted_address + '</div>');
            infowindow.open(resultsMap, this);
          });
        }
      });

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  }

  /* 
   * Displays the route between start and destination address for shared ride
   * called by RideComponent
   * Will calculate the distance and time to reach destination
  */
  showRouteForRide(start_Address, destination_Address)
  {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    
    var service = new google.maps.DistanceMatrixService;

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      disableDefaultUI: true,
      zoomControl: true
    });
    directionsDisplay.setMap(map);

    // show the direction on map
    directionsService.route({
      origin: start_Address,
      destination: destination_Address,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });

    // to find the distance and duration
    service.getDistanceMatrix({
      origins: [start_Address],
      destinations: [destination_Address],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, function(response, status){
      if (status === 'OK') 
      {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;

        var results = response.rows[0].elements;
        this.alert= results[0].distance.text + " and will take approximately "+ results[0].duration.text; 

        document.getElementById("info").innerText="The distance is "+this.alert+".";
      } 
      else {
        alert('Error was: ' + status);
      }  
      
      });
  }
}

