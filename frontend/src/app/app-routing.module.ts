import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'catalogue', 
    loadChildren: () => import('./modules/catalogues/catalogue.module').then(m => m.CatalogueModule)
  },
  { 
    path: 'client-form', 
    loadChildren: () => import('./modules/client-form/client-form.module').then(m => m.ClientFormModule)
  },
  { 
    path: 'basket', 
    loadChildren: () => import('./modules/basket/basket.module').then(m => m.BasketModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
