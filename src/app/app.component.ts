import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){
    var config = {
      apiKey: "AIzaSyA3QOqWKXFC4Gufj9vuKjlmpvafdvvKjrQ",
      authDomain: "blogback-z.firebaseapp.com",
      databaseURL: "https://blogback-z.firebaseio.com",
      projectId: "blogback-z",
      storageBucket: "blogback-z.appspot.com",
      messagingSenderId: "369844831869"
    };
    firebase.initializeApp(config);
}


}
