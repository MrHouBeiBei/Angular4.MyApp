import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/module/home/welcome/welcome.component';


export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome',
    component: WelcomeComponent,
    data: { title: "欢迎" }
  },


//   { path: '',
//   component: HeroComponent,
//   children: [
//     { path: '',    component: HeroListComponent },
//     { path: ':id', component: HeroDetailComponent }
//   ]
// }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}