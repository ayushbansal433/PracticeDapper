import { Token } from "@angular/compiler/src/ml_parser/lexer";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Role } from "src/app/shared/core/classes/role";
import { AuthToken } from "src/app/shared/core/classes/token";
import { apiUrls } from "src/app/shared/core/constants/apiUrls";
import { BaseService } from "src/app/shared/core/services/base.service";

@Component({
    templateUrl: "./signin.component.html",
    styleUrls: ["./signin.component.css"],
    selector: "app-signin"
})

export class SigninComponent implements OnInit {
    private userRole:Role;
    constructor(private service: BaseService, private router:Router) {
    this.userRole= new Role();
    }
    ngOnInit() {

    }

    protected signin(isAdmin: boolean): void {
        this.userRole.role= isAdmin
        this.service.post<AuthToken>(apiUrls.user.authentication, this.userRole).subscribe(data => { 
            if (data) {
                localStorage.setItem("token", data.token);
                this.router.navigate(["user"]);
            }
        },
        err=> console.log(err.statusText));
    }
}