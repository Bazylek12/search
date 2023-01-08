import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {CarModel} from "../models/car.model";
import {BrandModel} from "../models/brand.model";
import {SecurityFeatureModel} from "../models/security-feature.model";
import {ComfortFeatureModel} from "../models/comfort-feature.model";

@Injectable({ providedIn: 'root' })
export class CarsService {

  getCars(): Observable<CarModel[]> {
    return this._httpClient.get<CarModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/cars');
  }

  getBrands(): Observable<BrandModel[]> {
    return this._httpClient.get<BrandModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-brands');
  }

  getSecurityFeatures(): Observable<SecurityFeatureModel[]> {
    return this._httpClient.get<SecurityFeatureModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-security-features');
  }

  getComfortFeatures(): Observable<ComfortFeatureModel[]> {
    return this._httpClient.get<ComfortFeatureModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-comfort-features');
  }

  constructor(private _httpClient: HttpClient) {
  }
}
