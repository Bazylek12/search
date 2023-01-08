import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { CarsAutocompleteSearchComponent } from './cars-autocomplete-search.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatAutocompleteModule, MatOptionModule, MatTableModule],
  declarations: [CarsAutocompleteSearchComponent],
  providers: [],
  exports: [CarsAutocompleteSearchComponent]
})
export class CarsAutocompleteSearchComponentModule {
}
