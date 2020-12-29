import { OnInit, Component } from "@angular/core";
import { Subject, interval } from "rxjs";
import { multicast } from 'rxjs/operators';
import { apiUrls } from "src/app/shared/core/constants/apiUrls";
import { BaseService } from "src/app/shared/core/services/base.service";

@Component({
    templateUrl: "./user.component.html",
    selector: "app-user",
})
export class UserComponent implements OnInit {
    protected dataSource: any = [];
    protected urls = apiUrls;
    protected matDisplayColumns: string[] = ["name", "email", "createdOn", "updatedOn", "actions"]



    ngOnInit() {
        this.service.getAll(apiUrls.user.root).subscribe(data => {
        },
            err => console.log(err));

    }

    constructor(private service: BaseService) {

    }

    protected crudDialog(element: any): void {

    }

    protected getUser(id: number): void {

    }

    protected updateData(element: any): void {

    }

    protected deleteRecord(id: any): void {

    }

    protected addUser(element: any): void {

    }


}