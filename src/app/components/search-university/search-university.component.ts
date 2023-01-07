import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable, debounceTime, startWith, switchMap} from 'rxjs';
import { UniversityModel } from '../../models/university.model';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-search-university',
  styleUrls: ['./search-university.component.scss'],
  templateUrl: './search-university.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchUniversityComponent {
  readonly country: FormControl = new FormControl('');
  readonly universityList$: Observable<UniversityModel[]> = this.country.valueChanges.pipe(
    startWith(''),
    debounceTime(1000),
    switchMap((country) =>
      this._universitiesService.getUniversity(country) ?? []),
  )

  constructor(private _universitiesService: UniversitiesService) {
  }

}
