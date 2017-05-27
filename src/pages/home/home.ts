import { Component } from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech'; 
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text: string;

  constructor(private tts: TextToSpeech, public navCtrl: NavController) {
    
  }

  async sayText():Promise<any>{
    try{
      await this.tts.speak(this.text);
    }
    catch(e){
      console.log(e);
    }
  }

}
