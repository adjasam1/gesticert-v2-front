import {Application} from './application';
import {Platform} from './platform';
import {Environment} from './environment';
import {Root} from './root';
import {Server} from './server';
import {AddressAlternative} from './address-alternative';
import {User} from './user';
import {StatusDemand} from './status-demand';
import {TypeDemand} from './type-demand';

export class Certificate {
  constructor(public idCertificate?: number,
              public nameCertificate?: string,
              public linkAddressPrincipal?: string,
              public linkInstallation?: string,
              public passwordCertificate?: string,
              public dateIssue?: Date,
              public dateEndValidity?: Date,
              public dateDemand?: Date,
              public dateCreationDesired?: Date,
              public dateTransmission?: Date,
              public eMailReferent?: string,
              public descriptionContext?: string,
              public remarkRoot?: string,
              public application?: Application,
              public environment?: Environment,
              public platform?: Platform,
              public root?: Root,
              public servers?: Server[],
              public addressAlternative?: AddressAlternative[],
              public user?: User,
              public statusDemand?: StatusDemand,
              public typeDemand?: TypeDemand) {

    this.idCertificate = idCertificate;
    this.nameCertificate = nameCertificate;
    this.linkAddressPrincipal = linkAddressPrincipal;
    this.linkInstallation = linkInstallation;
    this.passwordCertificate = passwordCertificate;
    this.dateIssue = new Date(dateIssue);
    this.dateEndValidity = new Date(dateEndValidity);
    this.dateDemand = new Date(dateDemand);
    this.dateCreationDesired = new Date(dateCreationDesired);
    this.dateTransmission = new Date(dateTransmission);
    this.eMailReferent = eMailReferent;
    this.descriptionContext = descriptionContext;
    this.remarkRoot = remarkRoot;
    this.application = application;
    this.environment = environment;
    this.platform = platform;
    this.root = root;
    this.servers = servers;
    this.addressAlternative = addressAlternative;
    this.user = user;
    this.statusDemand = statusDemand;
    this.typeDemand = typeDemand;
  }
}
