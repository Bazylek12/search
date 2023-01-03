import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {JobTagModel} from "../models/job-tag.model";

@Injectable({ providedIn: 'root' })
export class JobPostsService {

  getAll(): Observable<JobTagModel[]> {
    return this._httpClient.get<JobTagModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts');
  }

  constructor(private _httpClient: HttpClient) {
  }
}
