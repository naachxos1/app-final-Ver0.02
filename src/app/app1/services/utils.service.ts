import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController)
  toastCtrl = inject(ToastController)
  router = inject(Router);
  saveInLocalStorage: any;


  /////////////////Tiempo de Carga/////////////////////
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }


  ////////////////Toast Error Login/////////////////////

  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  //////////////////Enrutea a pagina///////////////////////
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  //////////////////Guarda el elemento del Form ///////////////////////
  saveFromLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  //////////////////Guarda el elemento del Form ///////////////////////
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }



}