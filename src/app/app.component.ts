import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
<<<<<<< HEAD
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
=======
import { StatusBar, Splashscreen } from 'ionic-native';
>>>>>>> 87f9e3241ddcb6ef40cd63ca65315b78083d64b5

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

<<<<<<< HEAD
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
=======
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
>>>>>>> 87f9e3241ddcb6ef40cd63ca65315b78083d64b5
    });
  }
}
