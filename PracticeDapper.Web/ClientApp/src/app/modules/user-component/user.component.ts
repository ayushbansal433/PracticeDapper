import { OnInit, Component } from "@angular/core";

@Component({
    templateUrl:"./user.component.html",
    selector:"app-user"
})
export class UserComponent implements OnInit{
protected dataSource:any=[];
protected matDisplayColumns:string[]= ["name", "email", "createdOn", "updatedOn"]
    ngOnInit(){
        
    }

    constructor(){

    }


}