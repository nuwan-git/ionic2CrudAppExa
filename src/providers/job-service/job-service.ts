import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class JobServiceProvider {

    constructor(public http: Http) {}
	// baseUrl  = 'http://localhost/server/index.php/';
  
  	

	  postsomeData(job){
		//   console.log(job);
	  return this.http.post('http://localhost/server/index.php/job/add/',{job:job})       
	  	.map(response => {
			  return response.json().job;
		  })
  }



}