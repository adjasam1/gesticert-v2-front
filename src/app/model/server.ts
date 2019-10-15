import {Certificate} from './certificate';

export class Server {
  constructor(public idServer?: number,
              public nameServer?: string,
              public certificate?: Certificate[]) {

    this.idServer = idServer;
    this.nameServer = nameServer;
    this.certificate = certificate;
  }
}
