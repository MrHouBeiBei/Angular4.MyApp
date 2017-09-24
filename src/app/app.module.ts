import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { TestComponent } from './containers/test/test.component';
import { MenuComponent } from './common/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
