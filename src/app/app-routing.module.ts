import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './containers/test/test.component';

export const routes: Routes = [
//   { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: '', redirectTo: 'test', pathMatch: 'full'},
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },

  { path: 'test',
  component:TestComponent ,
  data:{title:'测试'} 
  }

//   { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
//   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}