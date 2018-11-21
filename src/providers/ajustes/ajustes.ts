import { Platform } from 'ionic-angular';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AjustesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AjustesProvider {
  // *.31 creamos una propiedad..
  listaAjustes={
    mostrar_tutorial:true
  }


  // *.30 inyectamos storage y platform vemos que se introduce los imports
  constructor(private plataforma:Platform,
               private storage: Storage) {
   
  }

  //*.29 crear el almacenamiento

  cargar_storage(){
    // if(this.plataforma.is("cordova")){ //estamos en el móvil

    // } else { //estamos en el navegador
    //   //localStorage viene en html5 y soportado por navegadores modernos
    //   if(localStorage.getItem("ajustes")){
    //     this.listaAjustes=JSON.parse(localStorage.getItem("ajustes"));//pasamos string(guarda el navegador) a JSON
    //   }
    // }

    // *.37 reformular todo como una promesa
    let promesa=new Promise((resolv, reject) => { //declarar la promesa
      if(this.plataforma.is("cordova")){ //estamos en el móvil
          this.storage.ready().then(()=>{
            this.storage.get("ajustes").then(a =>{
              if(a){
                this.listaAjustes=a;
              }
              resolv();
            }
            )
          }
          )
        } else { //estamos en el navegador
         
          if(localStorage.getItem("ajustes")){
            this.listaAjustes=JSON.parse(localStorage.getItem("ajustes"));
          }
          resolv();
        }
    }); 
    return promesa;
  }

  // *.32 creamos el metodo que guarda un valor en el movil o navegador
  guardar_storage(){
    if(this.plataforma.is("cordova")){ 
      // *.39 si estamos en el movil
      this.storage.ready().then(()=>{this.storage.set("ajustes",this.listaAjustes)}

      )
    } else {
      localStorage.setItem("ajustes",JSON.stringify( this.listaAjustes)); //aplanamos(de JSON a cadena continua) el JSON
    }

  }
}
