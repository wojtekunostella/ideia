
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Category } from '../pages/category/category';
import { Contact } from '../pages/contact/contact';
import { Faq } from '../pages/faq/faq';
import { Post } from '../pages/post/post';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDlasq8AraoFyOV9HbXnTAt2QwpOUA6hzU",
    authDomain: "ideia-91d93.firebaseapp.com",
    databaseURL: "https://ideia-91d93.firebaseio.com",
    projectId: "ideia-91d93",
    storageBucket: "ideia-91d93.appspot.com",
    messagingSenderId: "571316584521"
};
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'cd2c49d4'
  }
};

@NgModule({
  declarations: [
    MyApp,
    Home,
    Category,
    Contact,
    Faq,
    Post
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Category,
    Contact,
    Faq,
    Post
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
