import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydashcompComponent } from './mydashcomp/mydashcomp.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path:'',
    component:MydashcompComponent
  },
  {
    path:'product',
    component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
