import {Certificate} from './certificate';

export class Platform {
  constructor(public idPlatform?: number,
              public namePlatform?: string,
              public certificates?: Certificate[]) {

    this.idPlatform = idPlatform;
    this.namePlatform = namePlatform;
    this.certificates = certificates;
  }
}
