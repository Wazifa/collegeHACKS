import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, MapsAPILoader ,GoogleMapsAPIWrapper, NoOpMapsAPILoader} from '@agm/core';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';



declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map : any;
  geocoder: any;
  lat: any;
  lng: any;
  infoWindow : any;
  message : any;
  alert:String;
  // mapService: MapService;
  
  constructor() { 
    this.alert ="";
  }

  ngOnInit() {
    
    this.initMap();
  }

  /*
   * Displays an initial map with the user's location
  */
  initMap() 
  {
    if (navigator.geolocation) 
    {
      navigator.geolocation.getCurrentPosition(position => {
        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: position.coords.latitude, lng: position.coords.longitude}  
        });  
     });
   }
  }

  /*
   * Used to create a new map for displaying the apartment
  */
  helper(address)
  {
    
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: {lat: -34.397, lng: 150.644}  
    }); 
    this.geocodeAddress(this.map, address);
  }
    
  /*
   * Locates the apartment on the map
   * Displays place details on info window 
  */
  geocodeAddress(resultsMap, address) {
    
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
  initMapShowRoute (start_Address, destination_Address)
  {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    
    var service = new google.maps.DistanceMatrixService;

    var message; 

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
    }, function(response, status) {
      if (status !== 'OK') 
      {
        alert('Error was: ' + status);
      } 
      else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;

        var results = response.rows[0].elements;
       
        this.alert= results[0].distance.text + " in approximately "+ results[0].duration.text; 
      }  
      

      // finding a center position between the 2 points to display the information
      
      var average_bounds;
      var start_bounds;
      var dest_bounds;
    
      this.geocoder = new google.maps.Geocoder();
      
    this.geocoder.geocode({'address': start_Address}, function(results, status) {
      if (status === 'OK') {
        console.log(results[0].geometry.location.lat());
      }
      start_bounds = results[0].geometry.location;
      console.log(start_bounds.lat());
      console.log(start_bounds.lat());
    });

    this.geocoder.geocode({'address': destination_Address}, function(results, status) {
      if (status === 'OK') {
        console.log(results[0].geometry.location);
      }
      dest_bounds = results[0].geometry.location;
      
    });

    average_bounds = (start_bounds + dest_bounds)/2;
    console.log(average_bounds);

    var infowindow = new google.maps.InfoWindow({
      content: this.alert,
      setPosition : dest_bounds
    });
    
      infowindow.open(map);  
      });

  }
}
