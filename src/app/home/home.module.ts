import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "app/home/home-routing.module";
import { WelcomeComponent } from "app/home/welcome/welcome.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ],
  declarations: [
    WelcomeComponent,
  ]
})
export class HomeModule { }
