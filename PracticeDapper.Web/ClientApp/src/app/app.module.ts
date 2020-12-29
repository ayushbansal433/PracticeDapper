import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UserComponent } from './modules/user-component/user.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { SigninComponent } from './modules/user-component/signin/signin.component';
import { TokenInterceptor } from './shared/core/interceptors/token.interceptor';
import { AuthenticationGuard, NavigationGuard } from './shared/core/guards/authentication-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UserComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: 'sign-in', component: SigninComponent,canActivate:[NavigationGuard]},
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'user', component: UserComponent,canActivate:[AuthenticationGuard]},
      { path: '**', component: SigninComponent,canActivate:[NavigationGuard]},
      { path: '', component: SigninComponent,canActivate:[NavigationGuard] },
    ]),
    NoopAnimationsModule
  ],
  providers: [
    NavigationGuard,
    AuthenticationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
