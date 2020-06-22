import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { NativeGeocoder, NativeGeocoderOptions } from "@ionic-native/native-geocoder/ngx";
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

// import { Map, tileLayer, marker, Control} from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map-mobil.page.html',
  styleUrls: ['./view-map-mobil.page.scss'],
})
export class ViewMapPage implements OnInit {

  map: any;
  newMarker: any;
  address: string[];

  // constructor(private geocoder: NativeGeocoder, private router: Router, private androidPermissions: AndroidPermissions) { }
  constructor(private geocoder: NativeGeocoder, private router: Router) { }

  ngOnInit() {
    // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
    //   result => console.log('Has permission?', result.hasPermission),
    //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
    // );
    // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
    //   result => console.log('Has permission?', result.hasPermission),
    //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
    // );
    // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_LOCATION_EXTRA_COMMANDS).then(
    //   result => console.log('Has permission?', result.hasPermission),
    //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_LOCATION_EXTRA_COMMANDS)
    // );
    // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION, this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION, this.androidPermissions.PERMISSION.ACCESS_LOCATION_EXTRA_COMMANDS]);

    this.loadMap();
  }

  confirmPickupLocation() {
    let navigationextras: NavigationExtras = {
      state: {
        pickupLocation: this.address
      }
    };
    this.router.navigate(["home"], navigationextras);
  }

  getAddress(lat: number, long: number) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.geocoder.reverseGeocode(lat, long, options).then(results => {
      this.address = Object.values(results[0]).reverse();

    });
  }

  goBack() {
    this.router.navigate(["home"]);
  }

  loadMap() {
    this.map = new L.Map("mapId");
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    // this.locatePosition();
  }

  locatePosition() {

    this.map.locate({ setView: true }).on("locationfound", (e: any) => {

      this.newMarker = L.marker([e.latitude, e.longitude], {
        draggable: true
      }).addTo(this.map);

      this.newMarker.bindPopup("You are located here!").openPopup();
      this.getAddress(e.latitude, e.longitude); // This line is added

      this.newMarker.on("dragend", () => {
        const position = this.newMarker.getLatLng();
        this.getAddress(position.lat, position.lng);// This line is added

      });
    });
  }

}
