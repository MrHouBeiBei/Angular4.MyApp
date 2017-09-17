import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "app/home/welcome/welcome.component";


export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome',
    component: WelcomeComponent,
    data: { title: "欢迎" }
  }
  
//   { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
//   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}