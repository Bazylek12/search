import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductSortComponent} from './components/product-sort/product-sort.component';
import {MultiJobsComponent} from './components/multi-jobs/multi-jobs.component';
import {CategoriesRadioComponent} from './components/categories-radio/categories-radio.component';
import {UsersSortComponent} from './components/users-sort/users-sort.component';
import {SearchUniversityComponent} from './components/search-university/search-university.component';
import {MultiProductsSearchComponent} from './components/multi-products-search/multi-products-search.component';
import {CryptoAutocompleteComponent} from './components/crypto-autocomplete/crypto-autocomplete.component';
import {
  CarsAutocompleteSearchComponent
} from './components/cars-autocomplete-search/cars-autocomplete-search.component';
import {ProductSortComponentModule} from './components/product-sort/product-sort.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {MultiJobsComponentModule} from './components/multi-jobs/multi-jobs.component-module';
import {CategoriesRadioComponentModule} from './components/categories-radio/categories-radio.component-module';
import {UsersSortComponentModule} from './components/users-sort/users-sort.component-module';
import {SearchUniversityComponentModule} from './components/search-university/search-university.component-module';
import {UniversitiesServiceModule} from './services/universities.service-module';
import {
  MultiProductsSearchComponentModule
} from './components/multi-products-search/multi-products-search.component-module';
import {CryptoAutocompleteComponentModule} from './components/crypto-autocomplete/crypto-autocomplete.component-module';
import {
  CarsAutocompleteSearchComponentModule
} from './components/cars-autocomplete-search/cars-autocomplete-search.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products-sort', component: ProductSortComponent}, {
    path: 'jobs-sort',
    component: MultiJobsComponent
  }, {path: 'categories', component: CategoriesRadioComponent}, {
    path: 'users-sort',
    component: UsersSortComponent
  }, {path: 'search-universities', component: SearchUniversityComponent}, {
    path: 'products-search',
    component: MultiProductsSearchComponent
  }, {path: 'crypto-autocomplete', component: CryptoAutocompleteComponent}, {
    path: 'cars-autocomplete',
    component: CarsAutocompleteSearchComponent
  }]), ProductSortComponentModule, ProductsServiceModule, MultiJobsComponentModule, CategoriesRadioComponentModule, UsersSortComponentModule, SearchUniversityComponentModule, UniversitiesServiceModule, MultiProductsSearchComponentModule, CryptoAutocompleteComponentModule, CarsAutocompleteSearchComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
