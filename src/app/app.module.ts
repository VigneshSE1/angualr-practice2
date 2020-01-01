import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarcompnentComponent } from './topbarcompnent/topbarcompnent.component';
import { DasboardcompComponent } from './dasboardcomp/dasboardcomp.component';
import { CardcompComponent } from './cardcomp/cardcomp.component';
import { MydashcompComponent } from './mydashcomp/mydashcomp.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarcompnentComponent,
    DasboardcompComponent,
    CardcompComponent,
    MydashcompComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
