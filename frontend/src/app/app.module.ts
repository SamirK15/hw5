import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ToDoComponent } from './components/to-do/to-do.component';

import { TaskService } from './services/task/task.service';
import { UserAuthenticationService } from './services/user-authentication/user-authentication.service';
import {FormsModule} from "@angular/forms";
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingPageComponent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent,
    ToDoComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TaskService,
    UserAuthenticationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
