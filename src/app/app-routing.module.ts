import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductSortComponent} from './components/product-sort/product-sort.component';
import {MultiJobsComponent} from './components/multi-jobs/multi-jobs.component';
import {CategoriesRadioComponent} from './components/categories-radio/categories-radio.component';
import {UsersSortComponent} from './components/users-sort/users-sort.component';
import {ProductSortComponentModule} from './components/product-sort/product-sort.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {MultiJobsComponentModule} from './components/multi-jobs/multi-jobs.component-module';
import {CategoriesRadioComponentModule} from './components/categories-radio/categories-radio.component-module';
import {UsersSortComponentModule} from './components/users-sort/users-sort.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products-sort', component: ProductSortComponent}, {
    path: 'jobs-sort',
    component: MultiJobsComponent
  }, {path: 'categories', component: CategoriesRadioComponent}, {
    path: 'users-sort',
    component: UsersSortComponent
  }]), ProductSortComponentModule, ProductsServiceModule, MultiJobsComponentModule, CategoriesRadioComponentModule, UsersSortComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
