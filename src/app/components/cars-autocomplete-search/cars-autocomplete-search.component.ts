import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, combineLatest, map, shareReplay, startWith} from 'rxjs';
import {BrandModel} from '../../models/brand.model';
import {SecurityFeatureModel} from '../../models/security-feature.model';
import {ComfortFeatureModel} from '../../models/comfort-feature.model';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-cars-autocomplete-search',
  styleUrls: ['./cars-autocomplete-search.component.scss'],
  templateUrl: './cars-autocomplete-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsAutocompleteSearchComponent {
  readonly searchForm: FormGroup = new FormGroup({
    brand: new FormControl(''),
    securityFeature: new FormControl(''),
    comfortFeature: new FormControl('')
  });
  readonly searchFormValues$ = this.searchForm.valueChanges.pipe(
    startWith({
      brand: '',
      securityFeature: '',
      comfortFeature: '',
    }),
    shareReplay(1),
  )
  readonly brands$: Observable<BrandModel[]> = this._carsService.getBrands();
  readonly securityFeatures$: Observable<SecurityFeatureModel[]> = this._carsService.getSecurityFeatures();
  readonly comfortFeatures$: Observable<ComfortFeatureModel[]> = this._carsService.getComfortFeatures();
  readonly filteredBrands$: Observable<BrandModel[]> = combineLatest([
    this.searchFormValues$,
    this._carsService.getBrands(),
  ]).pipe(
    map(([searchForm, carBrands]) =>
      carBrands.filter((brand) =>
        brand.name.toLowerCase().includes(searchForm.brand ? searchForm.brand.toLowerCase() : '')
      )
    )
  );

  readonly filteredSecurityFeatures$: Observable<SecurityFeatureModel[]> = combineLatest([
    this.searchFormValues$,
    this._carsService.getSecurityFeatures(),
  ]).pipe(
    map(([searchForm, securityFeatures]) =>
      securityFeatures.filter((securityFeature) =>
        securityFeature.name.toLowerCase().includes(searchForm.securityFeature ? searchForm.securityFeature.toLowerCase() : '')
      )
    )
  );

  readonly filteredComfortFeatures$: Observable<ComfortFeatureModel[]> = combineLatest([
    this.searchFormValues$,
    this._carsService.getComfortFeatures(),
  ]).pipe(
    map(([searchForm, comfortFeatures]) =>
      comfortFeatures.filter((comfortFeature) =>
        comfortFeature.name.toLowerCase().includes(searchForm.comfortFeature ? searchForm.comfortFeature.toLowerCase() : '')
      )
    )
  );
  readonly cars$: Observable<{
    brand: string;
    model: string;
    comfortFeatures: string[];
    securityFeatures: string[];
  }[]> = combineLatest([
    this._carsService.getCars(),
    this.brands$,
    this.securityFeatures$,
    this.comfortFeatures$,
    this.searchFormValues$,
  ]).pipe(
    map(([cars, brands, securityFeatures, comfortFeatures, searchForm]) => {
      const brandMap = brands.reduce((acc, curr) => {
        return {...acc, [curr.id]: curr};
      }, {}) as Record<string, BrandModel>;

      const securityMap = securityFeatures.reduce((acc, curr) => {
        return {...acc, [curr.id]: curr};
      }, {}) as Record<string, SecurityFeatureModel>;

      const comfortMap = comfortFeatures.reduce((acc, curr) => {
        return {...acc, [curr.id]: curr};
      }, {}) as Record<string, ComfortFeatureModel>;

      return cars
        .filter(car =>
          (!searchForm.brand ||
            searchForm?.brand.trim().length === 0 ||
            brandMap[car.brandId]?.name === searchForm.brand) &&
          (!searchForm.securityFeature ||
            searchForm?.securityFeature.trim().length === 0 ||
            car.securityFeatureIds.map(sf =>
              securityMap[sf]?.name).includes(searchForm.securityFeature)) &&
          (!searchForm.comfortFeature ||
            searchForm?.comfortFeature.trim().length === 0 ||
            car.comfortFeatureIds.map(cf =>
              comfortMap[cf]?.name).includes(searchForm.comfortFeature))
        )
        .map(car => {
          return {
            brand: brandMap[car.brandId]?.name,
            model: car.model,
            comfortFeatures: (car.comfortFeatureIds ?? []).map(
              (cf) => comfortMap[cf]?.name
            ),
            securityFeatures: (car.securityFeatureIds ?? []).map(
              (sf) => securityMap[sf]?.name
            )
          }
        })
    })
  )

  constructor(private _carsService: CarsService) {
  }

}
