
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit  {
	
constructor(){}

ngOnInit(){
}

books =[];
shto(item: string ) {

	if(item!='') {

		this.books.push (item) ;

	}
}
  

librat =[];
shtoLiber(liber: string ) {

	if(liber!='') {

		this.librat.push (liber) ;

	}
}







}
