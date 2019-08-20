import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { OrderAdminEditComponent } from './page/order-admin-edit/order-admin-edit.component';
import { ProductAdminComponent } from './page/product-admin/product-admin.component';
import { ProductAdminEditComponent } from './page/product-admin-edit/product-admin-edit.component';
import { ProductsComponent } from './page/products/products.component';
import { ProductsDetailsComponent } from './page/products-details/products-details.component';
import { OrderService } from '../app/service/order.service';
import { ProductService } from '../app/service/product.service';
import { NavComponent } from '../app/nav/nav.component';
import { AdminComponent } from './page/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OrderAdminComponent,
    OrderAdminEditComponent,
    ProductAdminComponent,
    ProductAdminEditComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    NavComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [OrderService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
