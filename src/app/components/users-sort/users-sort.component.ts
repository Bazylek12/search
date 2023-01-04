import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subject, combineLatest, map, startWith} from 'rxjs';
import {RoleModel} from '../../models/role.model';
import {DepartmentModel} from '../../models/department.model';
import {UserModel} from '../../models/user.model';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users-sort',
  styleUrls: ['./users-sort.component.scss'],
  templateUrl: './users-sort.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersSortComponent {
  readonly userForm: FormGroup = new FormGroup({
    departments: new FormControl(),
    roles: new FormControl()
  });
  readonly rolesList$: Observable<RoleModel[]> = this._usersService.getRoles();
  readonly departmentsList$: Observable<DepartmentModel[]> = this._usersService.getDepartments();
  readonly usersList$: Observable<UserModel[]> = combineLatest([
    this._usersService.getUsers(),
    this.userForm.valueChanges.pipe(startWith({departments: '', roles: ''}))
  ]).pipe(
    map(([users, userForm]) =>
        !!userForm.departments && !!userForm.roles
          ? users.filter((user) => user.departmentId === +userForm.departments.id && user.roleId === userForm.roles.id)
          : []
    )
  )
  private _userDepartmentSubject: Subject<string> = new Subject<string>();
  public userDepartment: Observable<string> = this._userDepartmentSubject.asObservable();

  constructor(private _usersService: UsersService) {
  }

  selectedDepartment(department: string): void {
    this._userDepartmentSubject.next(department)
  }
}
