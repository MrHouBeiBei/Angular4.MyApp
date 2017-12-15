import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from 'app/module/home/home-routing.module';
import { WelcomeComponent } from 'app/module/home/welcome/welcome.component';

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
