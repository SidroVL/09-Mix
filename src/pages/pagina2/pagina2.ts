import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  // *.10 crear metodo para el evento de html
  ir_pagina3(){
    // *.11 invocado el nombre que aparece en pagina3.module.ts  
    // creando la pagina con el comando no es necesario importarlo a home.ts 
  //  this.navCtrl.push("Pagina3Page");

    // *.13 otra forma de referenciar por el nombre de ionicpage pagina3.ts
    this.navCtrl.push("mi-pagina3");
  }
}
