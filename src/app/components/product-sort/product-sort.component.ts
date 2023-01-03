import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {combineLatest, map, Observable, of, startWith} from 'rxjs';
import { ProductModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-sort',
  styleUrls: ['./product-sort.component.scss'],
  templateUrl: './product-sort.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSortComponent {
  readonly productsList$: Observable<ProductModel[]> = this._productsService.getAll();
  readonly form: FormGroup = new FormGroup({
    order: new FormControl(''),
  });
  readonly orderOptions$: Observable<string[]> = of(['asc', 'desc']);
  readonly sortedList$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.form.valueChanges.pipe(startWith({ order: '' })),
  ]).pipe(
    map(([products, form]) => {
      if (!!form.order) {
        return products.sort((a, b) => {
          if (a.title > b.title) {
            return form.order === 'asc' ? 1 : -1;
          }
          if (a.title < b.title) {
            return form.order === 'desc' ? 1 : -1;
          }
          return 0;
        })
      } else {
        return []
      }

    })
  )



  constructor(private _productsService: ProductsService) {
  }

}
