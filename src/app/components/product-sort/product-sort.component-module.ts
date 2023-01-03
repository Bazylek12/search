import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ProductSortComponent } from './product-sort.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule],
  declarations: [ProductSortComponent],
  providers: [],
  exports: [ProductSortComponent]
})
export class ProductSortComponentModule {
}
