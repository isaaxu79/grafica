import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EspService } from 'src/service/esp.services';

 const firebaseConfig: any = {
   apiKey: "AIzaSyBXqD_8DNzlwBxxmqiud3p8uxXXBYklFFA",
     authDomain: "esp-iot-c8dcf.firebaseapp.com",
     databaseURL: "https://esp-iot-c8dcf.firebaseio.com",
     projectId: "esp-iot-c8dcf",
     storageBucket: "esp-iot-c8dcf.appspot.com",
     messagingSenderId: "492218842827"
 };

@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [EspService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // lista.push(snapshot.val().dato1);
  //             lista.push(snapshot.val().dato2);
  //             lista.push(snapshot.val().dato3);
 }
