import {Certificate} from './certificate';

export class Environment {
  constructor(public idEnvironment?: number,
              public nameEnvironment?: string,
              public certificates?: Certificate[]) {

    this.idEnvironment = idEnvironment;
    this.nameEnvironment = nameEnvironment;
    this.certificates = certificates;
  }
}
