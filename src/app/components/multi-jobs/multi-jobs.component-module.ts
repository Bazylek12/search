import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MultiJobsComponent } from './multi-jobs.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatSelectModule, MatListModule, HttpClientModule],
  declarations: [MultiJobsComponent],
  providers: [HttpClientModule],
  exports: [MultiJobsComponent]
})
export class MultiJobsComponentModule {
}
