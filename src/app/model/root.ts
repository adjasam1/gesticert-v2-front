import {Certificate} from './certificate';

export class Root {
  constructor(public idRoot?: number,
              public nameRoot?: string,
              public certificates?: Certificate[]) {

    this.idRoot = idRoot;
    this.nameRoot = nameRoot;
    this.certificates = certificates;
  }
}
