import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { User } from '../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();

  constructor(private router: Router, private route: ActivatedRoute) { }

  doLogin() {
    let navigationextras: NavigationExtras = {
      state: {
        pickupLocation: 'juan bagynka 3483'
      }
    };
    this.router.navigate(['home'], navigationextras);
  }

  ngOnInit() {
  }

}
