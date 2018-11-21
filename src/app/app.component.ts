import { AjustesProvider } from './../providers/ajustes/ajustes';
import { IntroduccionPage } from './../pages/introduccion/introduccion';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  // .23 mostrar temporalmente la pagina de introduccion
  //rootPage:any = IntroduccionPage; //a veces funciona con comillas a veces sin ellas no si(sin comillas no funciona si no esta importada)
  // *.35 dejar el rootPage sin definir(any)
  rootPage:any;
  if () {
    
  }


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private ajustesProvider: AjustesProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // *.36 cargar introduccion o home en funcion de lo que tenga guardado

      this.ajustesProvider.cargar_storage();
      if (this.ajustesProvider.listaAjustes.mostrar_tutorial){
        this.rootPage=IntroduccionPage;
      } else{
        this.rootPage=HomePage;
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

