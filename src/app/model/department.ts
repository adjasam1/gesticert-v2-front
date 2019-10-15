import {User} from './user';

export class Department {
  constructor(public idDepartment?: number,
              public nameDepartment?: string,
              public users?: User[]) {

    this.idDepartment = idDepartment;
    this.nameDepartment = nameDepartment;
    this.users = users;
  }
}
