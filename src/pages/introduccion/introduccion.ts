import { AjustesProvider } from './../../providers/ajustes/ajustes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntroduccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class IntroduccionPage {
  // *.20 creamos un array estructura para el slide
  // .*21 copiamos la carpeta img en assets
  slides:any[] = [
    {
      title: "Bienvenido!!!",
      description: "Esta <b>aplicación</b> nos ayudará a comprender muchos temas interesantes en ionic!",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "¿Qué es ionic?",
      description: "<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones móviles de alta calidad con el conocimiento de JavaScript, CSS y HTML.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "¿Que hace esta app?",
      description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  // *.33 inyectar el servicio creado
  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public ajustesProvider:AjustesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroduccionPage');
  }

  // *.25 crear un evento click
  // *.26 instalar plugin storage: ionic cordova plugin add cordova-sqlite-storage
  // *.27 generar el provider ajustes

  //despues de hacer todo los de ajustes venimos aqui
  saltar_tutorial(){
    //*.34
    this.ajustesProvider.listaAjustes.mostrar_tutorial= false;
    this.ajustesProvider.guardar_storage();
  }

}
