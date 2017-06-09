import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{AddNewJob} from '../addNewJob/addNewJob';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
addNewJob(){
      this.navCtrl.push(AddNewJob);
  }
  
}
