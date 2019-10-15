import {Certificate} from './certificate';

export class TypeDemand {
  constructor(public idTypeDemand: number,
              public nameTypeDemand: string,
              public certificates?: Certificate[]) {

    this.idTypeDemand = idTypeDemand;
    this.nameTypeDemand = nameTypeDemand;
    this.certificates = certificates;
  }
}
