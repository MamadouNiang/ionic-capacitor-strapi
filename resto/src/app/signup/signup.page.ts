import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Utilsateur } from '../Models/Utilsateur';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  registerForm: FormGroup;
  typePassword = false;
  iconPassword = 'eye-outline';

  constructor(private formBuilder: FormBuilder, private service: AuthService,
    private route: Router, public toastController: ToastController
  ) { }

  voirPassword(): void {
    this.typePassword = !this.typePassword;

    if (this.iconPassword == 'eye-outline') {
      this.iconPassword = 'eye-off-outline';
    } else {
      this.iconPassword = 'eye-outline';
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'username': [null, [Validators.required, Validators.minLength(3)]],
      'email': [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      'secret': [null, [Validators.required]],
      'password': 'secret',
      'telephone': [null, [Validators.required]],
      'prenom': [null, [Validators.required]],
      'adresse': [null, [Validators.required]],
    });
  }

  async presentwToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'warning',
      position: 'bottom'
    });
    toast.present();
  }
  async presentsToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
  async presentdToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'danger',
      position: 'bottom'
    });
    toast.present();
  }

  register(userInfo: Utilsateur) {
    this.service.register(userInfo).subscribe(data => {
      this.presentsToast('Inscription réussie');
      this.route.navigateByUrl('login');
    }, error => {
      switch (error.error.message[0].messages[0].id) {
        case "Auth.form.error.email.taken":
          this.presentwToast('Email déjà utilisé!');
          break;
        case "Auth.form.error.username.taken":
          this.presentwToast("Username d'utilisateur déjà utilisé!");
          break;
        default:
          this.presentdToast('Une erreur est survenue!');
          break;
      }
    });
  }

}
