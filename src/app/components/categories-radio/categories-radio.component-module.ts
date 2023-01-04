import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CategoriesRadioComponent } from './categories-radio.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatRadioModule, CommonModule, MatCardModule, MatListModule],
  declarations: [CategoriesRadioComponent],
  providers: [],
  exports: [CategoriesRadioComponent]
})
export class CategoriesRadioComponentModule {
}
