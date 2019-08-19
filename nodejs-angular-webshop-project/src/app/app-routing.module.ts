import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { ProductsDetailsComponent } from './page/products-details/products-details.component';
import { ProductsComponent } from './page/products/products.component';
import { ProductAdminEditComponent } from './page/product-admin-edit/product-admin-edit.component';
import { ProductAdminComponent } from './page/product-admin/product-admin.component';
import { OrderAdminEditComponent } from './page/order-admin-edit/order-admin-edit.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin/order', component: OrderAdminComponent },
  { path: 'admin/order/:id', component: OrderAdminEditComponent },
  { path: 'admin/product', component: ProductAdminComponent },
  { path: 'admin/product/:id', component: ProductAdminEditComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsDetailsComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
