import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'kitchen',
    loadChildren: () => import('../app/kitchen/kitchen.module').then(m => m.KitchenModule)
  },

  {
    path: 'waiter',
    loadChildren: () => import('../app/waiter/waiter.module').then(m => m.WaiterModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
