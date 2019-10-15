import {Certificate} from './certificate';
import {User} from './user';

export class Application {
  constructor(public idApplication?: number,
              public codeCCX?: string,
              public nameApplication?: string,
              public nameClient?: string,
              public firstNameClient?: string,
              public managementClient?: string,
              public phoneClient?: string,
              public eMailClient?: string,
              public comment?: string,
              public users?: User[],
              public certificates?: Certificate[]) {

    this.idApplication = idApplication;
    this.codeCCX = codeCCX;
    this.nameApplication = nameApplication;
    this.nameClient = nameClient;
    this.firstNameClient = firstNameClient;
    this.managementClient = managementClient;
    this.phoneClient = phoneClient;
    this.eMailClient = eMailClient;
    this.comment = comment;
    this.users = users;
    this.certificates = certificates;
  }
}
