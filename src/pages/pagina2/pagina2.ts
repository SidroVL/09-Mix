import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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

  // *.42 import AlerctControler
  // *.45 import loadingCOntrollers
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController, private loadincCtrl:LoadingController) {
  }

 

  // *.10 crear metodo para el evento de html
  ir_pagina3(){
    // *.11 invocado el nombre que aparece en pagina3.module.ts  
    // creando la pagina con el comando no es necesario importarlo a home.ts 
  //  this.navCtrl.push("Pagina3Page");

    // *.13 otra forma de referenciar por el nombre de ionicpage pagina3.ts
    this.navCtrl.push("mi-pagina3");
  }
  ir_pagina4(){
    this.navCtrl.push("mi-pagina4");
  }

  // *.15 ver en consola la ejecucion del ciclo de vida de la pagina
  ionViewDidLoad() { //metodo que ocurre al cargar la pagina
    
    console.log('ionViewDidLoad Pagina2Page');
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload");
  }

  ionViewCanEnter_antiguo(){
    console.log("ionViewCanEnter");
    // *.16 entrar de forma aleatoria
    let numero=Math.round(Math.random()*10);
    console.log(numero);
    if(numero>=3){
      return true; //entra en la pagina
    } else {
      return false; //no entra en la pagina
    }
  }

  //*.41 renombrar el ionViewCanEnter a ionViewCanEnter_antiguo
  ionViewCanEnter(){
    console.log("ionViewCanEnter");
    let promesa= new Promise((resolve,reject)=>{
      // *.43 copiar el esquema de la DOCU https://ionicframework.com/docs/components/#alert-confirm
        let confirmar=this.alertCtrl.create({
          title: 'Seguro?',
          message: 'Quieres entrar?',
          buttons: [
            {
              text: 'Cancelar',
              handler: () => {
                    resolve(false);
              }
            },
            {
              text: 'Aceptar',
              handler: () => {
                  resolve(true);
              }
            }
          ]
        });
        confirmar.present();
      }

    );

    return promesa;
  }

  ionViewCanLeave_antiguo(){
    console.log("ionViewCanLeave");
    // *.17 dejamos salir despues de 2 segundos
    let promesa = new Promise((resolv,reject) =>{
        setTimeout(() =>{resolv (true);
    } , 2000)
  });
    return promesa;

    // *.18 sintaxis alternativa return new Promise();
  }

  // *.44 renombre el ionViewCanLeave a ionViewCanLeave_antiguo
  ionViewCanLeave(){
    console.log("ionViewCanLeave");
  
    let loading=this.loadincCtrl.create({
      content: "Espere por favor..."
    });
    loading.present();

    let promesa = new Promise((resolv,reject) =>{
      setTimeout(() =>{
        resolv (true);
        loading.dismiss();
              } , 5000)
    });
  return promesa;
  }
}
