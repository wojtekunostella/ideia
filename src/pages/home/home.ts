import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Post } from '../post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  constructor(private nav: NavController) {

  }
 
}
