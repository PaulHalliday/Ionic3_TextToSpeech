import { Component } from '@angular/core';
import { TextToSpeech } from 'ionic-native'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text: string = "";
  constructor() {

  }

  read(): void {
    //Read the text from the model via TTS
    TextToSpeech.speak(this.text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

}
