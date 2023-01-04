import { NgModule } from '@angular/core';
import { UsersService } from './users.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [UsersService, HttpClientModule],
  exports: []
})
export class UsersServiceModule {
}
