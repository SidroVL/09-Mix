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
    if(this.plataforma.is("cordova")){ //estamos en el móvil

    } else { //estamos en el navegador
      //localStorage viene en html5 y soportado por navegadores modernos
      if(localStorage.getItem("ajustes")){
        this.listaAjustes=JSON.parse(localStorage.getItem("ajustes"));//pasamos string(guarda el navegador) a JSON
      }
    }
  }

  // *.32 creamos el metodo que guarda un valor en el movil o navegador
  guardar_storage(){
    if(this.plataforma.is("cordova")){ 

    } else {
      localStorage.setItem("ajustes",JSON.stringify( this.listaAjustes)); //aplanamos(de JSON a cadena continua) el JSON
    }

  }
}
