import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Map, tileLayer, marker } from 'leaflet';
import { NativeGeocoder, NativeGeocoderOptions } from "@ionic-native/native-geocoder/ngx";

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.page.html',
  styleUrls: ['./view-map.page.scss'],
})
export class ViewMapPage implements OnInit {

  map: Map;
  newMarker: any;
  address: string[];

  constructor(private geocoder: NativeGeocoder, private router: Router) { }

  ngOnInit() {
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
    this.map = new Map("mapId").setView([17.3850, 78.4867], 13);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(this.map); // This line is added to add the Tile Layer to our map
  }

  locatePosition() {

    this.map.locate({ setView: true }).on("locationfound", (e: any) => {
      debugger
      this.newMarker = marker([e.latitude, e.longitude], {
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
