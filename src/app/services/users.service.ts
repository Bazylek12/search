import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {RoleModel} from "../models/role.model";
import {DepartmentModel} from "../models/department.model";
import {UserModel} from "../models/user.model";

@Injectable({ providedIn: 'root' })
export class UsersService {

  getRoles(): Observable<RoleModel[]> {
    return this._httpClient.get<RoleModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }

  getDepartments(): Observable<DepartmentModel[]> {
    return this._httpClient.get<DepartmentModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/departments');
  }

  getUsers(): Observable<UserModel[]> {
    return this._httpClient.get<UserModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/user');
  }

  constructor(private _httpClient: HttpClient) {
  }
}
