import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, of, startWith, combineLatest, map} from 'rxjs';
import {JobTagModel} from '../../models/job-tag.model';
import {JobPostsService} from '../../services/job-posts.service';

@Component({
  selector: 'app-multi-jobs',
  styleUrls: ['./multi-jobs.component.scss'],
  templateUrl: './multi-jobs.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiJobsComponent {
  readonly propertiesList$: Observable<string[]> = of(['title', 'description']);
  readonly directionsList$: Observable<string[]> = of(['asc', 'desc']);

  readonly jobForm: FormGroup = new FormGroup({
    properties: new FormControl(''),
    directions: new FormControl(''),
  });
  readonly jobsList$: Observable<JobTagModel[]> = combineLatest([
    this._jobPostsService.getAll(),
    this.jobForm.valueChanges.pipe(startWith({properties: '', directions: ''}))
  ]).pipe(
    map(([jobs, jobForm]) => {
      if (!!jobForm.properties) {
        return jobs.sort((a, b) => {
          if (jobForm.properties === 'title') {
            if (a.title > b.title) return jobForm.directions === 'asc' ? 1 : -1;
            if (a.title < b.title) return jobForm.directions === 'desc' ? 1 : -1;
            return 0;
          }
          if (jobForm.properties === 'description') {
            if (a.description > b.description) return jobForm.directions === 'asc' ? 1 : -1;
            if (a.description < b.description) return jobForm.directions === 'desc' ? 1 : -1;
            return 0;
          }
          return 0;
        });
      } else {
        return [];
      }

    })
  )

  constructor(private _jobPostsService: JobPostsService) {
  }

}

