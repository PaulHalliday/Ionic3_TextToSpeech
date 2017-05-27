import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { TextToSpeech } from '@ionic-native/text-to-speech'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from "@angular/platform-browser";
=======
>>>>>>> 87f9e3241ddcb6ef40cd63ca65315b78083d64b5

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
=======
>>>>>>> 87f9e3241ddcb6ef40cd63ca65315b78083d64b5
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
<<<<<<< HEAD
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TextToSpeech 
  ]
=======
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
>>>>>>> 87f9e3241ddcb6ef40cd63ca65315b78083d64b5
})
export class AppModule {}
