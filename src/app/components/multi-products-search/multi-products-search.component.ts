import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, startWith, combineLatest, map} from 'rxjs';
import {ProductModel} from '../../models/products.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-multi-products-search',
  styleUrls: ['./multi-products-search.component.scss'],
  templateUrl: './multi-products-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiProductsSearchComponent {
  readonly title: FormControl = new FormControl('');
  readonly productsList$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.title.valueChanges.pipe(
      startWith({title: ''})
    )
  ]).pipe(
    map(([products, title]) =>
      !!title
        ? products.filter(
          (product) =>
            product.title
              .toLowerCase()
              .includes(title.toString())
            ||
            product.price
              .toString()
              .includes(title.toString())
        )
        : []
    )
  )

  constructor(private _productsService: ProductsService) {
  }


}
