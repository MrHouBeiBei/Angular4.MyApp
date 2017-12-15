import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
//   { path: 'welcome',
//     component: WelcomeComponent,
//     data: { title: "欢迎" }
//   }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}