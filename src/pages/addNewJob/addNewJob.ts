import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup ,FormControl} from '@angular/forms'; // added 2

import{JobServiceProvider} from '../../providers/providers';

@Component({
  selector: 'page-addNewJob',
  templateUrl: 'addNewJob.html'
})
export class AddNewJob {
form;
private add: FormGroup;
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder,private restService:JobServiceProvider) {
    this.add = this.formBuilder.group({
		name : [''],
		description : [''],
    value : ['']
	  });
  }

 ngOnInit(){
   this.form = new FormGroup({
     name :new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')

     ])),
     description : new FormControl(''),
     value : new FormControl('')
   });
 } 
   onSubmitClick(){
	  let data = this.add.value;
    // console.log(data);
	  this.restService.postsomeData(data).subscribe(response => {
		console.log(response);
	  });
  }

}
