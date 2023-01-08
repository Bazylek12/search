import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Observable, combineLatest, map, startWith} from 'rxjs';
import {CryptoModel} from '../../models/crypto.model';
import {CryptosService} from '../../services/cryptos.service';

@Component({
  selector: 'app-crypto-autocomplete',
  styleUrls: ['./crypto-autocomplete.component.scss'],
  templateUrl: './crypto-autocomplete.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoAutocompleteComponent {

  readonly cryptoForm: FormGroup = new FormGroup({
    cryptoName: new FormControl(''),
    cryptoChip: new FormArray([]),
  });
  readonly cryptoList$: Observable<CryptoModel[]> = combineLatest([
    this._cryptosService.getAll(),
    this.cryptoForm.valueChanges.pipe(startWith({ cryptoName: ''}))
  ]).pipe(
    map(([cryptos, form]) =>
      cryptos.filter(crypto => crypto.symbol.toLowerCase().includes(form.cryptoName?.toLowerCase()))
    ));

  addNewChip(symbol: CryptoModel): void {
    this.cryptoChip.push(new FormControl(symbol))
  }

  get cryptoChip(): FormArray {
    return this.cryptoForm.controls["cryptoChip"] as FormArray;
  }

  constructor(private _cryptosService: CryptosService) {
  }

}
