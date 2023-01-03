import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    order: new FormControl('', Validators.required),
  });
  readonly orderOptions$: Observable<string[]> = of(['asc', 'desc']);
  readonly sortedList$: Observable<ProductModel[]> = combineLatest([
    this.productsList$,
    this.form.valueChanges.pipe(map(form => form.order), startWith(''))
  ]).pipe(
    map(([products, order] : [ProductModel[], string]) => {
      return products.sort((a, b) => {
        if (a.title > b.title) {
          return order === 'asc' ? 1 : -1;
        }
        if (a.title < b.title) {
          return order === 'desc' ? 1 : -1;
        }
        return 0;
      })
    })
  )



  constructor(private _productsService: ProductsService) {
  }

}
