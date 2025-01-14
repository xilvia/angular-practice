import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { ProductsDetailsComponent } from './page/products-details/products-details.component';
import { ProductsComponent } from './page/products/products.component';
import { ProductAdminEditComponent } from './page/product-admin-edit/product-admin-edit.component';
import { ProductAdminComponent } from './page/product-admin/product-admin.component';
import { OrderAdminEditComponent } from './page/order-admin-edit/order-admin-edit.component';
import { AdminComponent } from './page/admin/admin.component';
import { AddOrderAdminComponent } from './page/add-order-admin/add-order-admin.component';
import { AddProductAdminComponent } from './page/add-product-admin/add-product-admin.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'order-admin', component: OrderAdminComponent },
  { path: 'order-admin/:id', component: OrderAdminEditComponent },
  { path: 'add-order-admin', component: AddOrderAdminComponent },
  { path: 'product-admin', component: ProductAdminComponent },
  { path: 'product-admin/:id', component: ProductAdminEditComponent },
  { path: 'add-product-admin', component: AddProductAdminComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsDetailsComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
