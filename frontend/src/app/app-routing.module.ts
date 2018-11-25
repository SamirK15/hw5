import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import {ControlPanelComponent} from "./components/control-panel/control-panel.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'to-do', component: ToDoComponent },
  {path: 'control-panel', component: ControlPanelComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
