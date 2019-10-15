import {Certificate} from './certificate';

export class StatusDemand {
  constructor(public idStatusDemand: number,
              public stateDemand: string,
              public certificates?: Certificate[]) {

    this.idStatusDemand = idStatusDemand;
    this.stateDemand = stateDemand;
    this.certificates = certificates;
  }
}
