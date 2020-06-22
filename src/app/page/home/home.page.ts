import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pickupLocation: string;
  platform_mobil: boolean;
  // The constructor below was changed
  constructor(private router: Router, private route: ActivatedRoute,
    public platform: Platform) {
    // obtener parametros que recive de la redireccion
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pickupLocation = this.router.getCurrentNavigation().extras.state.pickupLocation;
      }
    });
  }

  onOpenMap() {
    const _platform_mobil = this.platform.is('mobile') || this.platform.is('mobileweb');
    if (_platform_mobil) {
      this.router.navigate(['view-map']);
    } else {
      this.router.navigate(['view-map-web']);
    }
  }

  onpickupClick() {
    this.router.navigate(['view-map']);
  }

}
