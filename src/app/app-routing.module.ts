import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductSortComponent } from './components/product-sort/product-sort.component';
import { ProductSortComponentModule } from './components/product-sort/product-sort.component-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-sort', component: ProductSortComponent }]), ProductSortComponentModule, ProductsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
