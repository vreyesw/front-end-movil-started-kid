import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pickupLocation: string;
  // The constructor below was changed
  constructor(private router: Router, private route: ActivatedRoute) {
    // obtener parametros que recive de la redireccion
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pickupLocation = this.router.getCurrentNavigation().extras.state.pickupLocation;
      }
    });

  }

  onpickupClick() {
    this.router.navigate(['view-map']);
  }

}
