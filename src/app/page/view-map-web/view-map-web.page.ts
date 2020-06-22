import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as L from 'leaflet';

@Component({
  selector: 'app-view-map-web',
  templateUrl: './view-map-web.page.html',
  styleUrls: ['./view-map-web.page.scss'],
})
export class ViewMapWebPage implements OnInit {

  map: L.Map;
  newMarker: any;

  constructor( private router: Router) { }

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map');
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });


    tiles.addTo(this.map);
    this.map.locate({ setView: true }).on("locationfound", (e: any) => {
      this.newMarker = L.marker([e.latitude, e.longitude], {
        draggable: true
      }).addTo(this.map);

      this.newMarker.bindPopup("You are located here!").openPopup();
      

    });
  }

  goBack() {
    this.router.navigate(["home"]);
  }

}
