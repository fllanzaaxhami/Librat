import{Component} from '@angular/core';
import{appService}from './app.service';

@Component({
	selector: 'dem-app',
	template: '<div> {{value}}</div>',
	providers:[appService]

}
)

export class AppComponent2{
value: string="";
constructor(private _appService: appService){}
ngOnInit(): void{
	this.value=this._appService.getApp();
}

}
