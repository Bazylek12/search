import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { ProductModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categories-radio',
  styleUrls: ['./categories-radio.component.scss'],
  templateUrl: './categories-radio.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesRadioComponent {
  readonly filterForm: FormGroup = new FormGroup({
    categories: new FormControl()
  });
  readonly categoryList$: Observable<string[]> = this._productsService.getCategories();
  readonly productsList$: Observable<ProductModel[]> = this._productsService.getAll();
  readonly sortedList$: Observable<ProductModel[]> = combineLatest([
    this.productsList$,
    this.filterForm.valueChanges.pipe(startWith({ categories: ''}))
  ]).pipe(
    map(([products, form]) => {
      if (!!form.categories) {
        return products.filter(product => product.category === form.categories)
      } else return []

    })
  )


  constructor(private _productsService: ProductsService) {
  }
}
