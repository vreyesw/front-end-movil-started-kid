import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';

import { User } from '../../model/user'

import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  isAuthenticated: boolean;
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }


  async doLogin() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    // validar que la info ingresada en el login siga el formato que corresponde (email y contraseña)
    if (this.form.valid) {
      try {
        // validar si se realiza el login con el back end
        const username = this.form.get('username').value;
        const password = this.form.get('password').value; 
        await this.authService.login(username, password);

        // Enviar esa dirección por defecto al redireccionar al home  (despues probar con el localstore)
        let navigationextras: NavigationExtras = {
          state: {
            pickupLocation: 'juan bagynka 3483',
            user: username,
          }
        };
        this.router.navigate(['home'], navigationextras);
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

  logout() {
    this.authService.logout('/');
  }


}
