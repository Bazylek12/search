import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductSortComponent } from './components/product-sort/product-sort.component';
import { MultiJobsComponent } from './components/multi-jobs/multi-jobs.component';
import { ProductSortComponentModule } from './components/product-sort/product-sort.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { MultiJobsComponentModule } from './components/multi-jobs/multi-jobs.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-sort', component: ProductSortComponent }, { path: 'jobs-sort', component: MultiJobsComponent }]), ProductSortComponentModule, ProductsServiceModule, MultiJobsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
