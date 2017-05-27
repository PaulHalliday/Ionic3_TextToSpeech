import { Component } from '@angular/core';
<<<<<<< HEAD
import {TextToSpeech} from '@ionic-native/text-to-speech'; 
import { NavController } from 'ionic-angular';
=======
import { TextToSpeech } from 'ionic-native'
>>>>>>> 87f9e3241ddcb6ef40cd63ca65315b78083d64b5

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD

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
=======
  text: string = "";
  constructor() {

  }

  read(): void {
    //Read the text from the model via TTS
    TextToSpeech.speak(this.text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
>>>>>>> 87f9e3241ddcb6ef40cd63ca65315b78083d64b5
  }

}
