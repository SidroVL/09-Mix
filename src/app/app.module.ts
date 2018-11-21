import { IntroduccionPage } from './../pages/introduccion/introduccion';
// *.5 import de la pagina
import { Pagina3Page } from './../pages/pagina3/pagina3';
import { Pagina2Page } from './../pages/pagina2/pagina2';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AjustesProvider } from '../providers/ajustes/ajustes';
// *.28 importar Storage y meterlo en imports luego a ajustes.ts
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // *. 3referencia a pagina
    Pagina2Page,
    IntroduccionPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //*.4 referencia a pagina
    Pagina2Page, 
    IntroduccionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AjustesProvider
  ]
})
export class AppModule {}
