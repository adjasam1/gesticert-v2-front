import {Department} from './department';
import {Profile} from './profile';
import {Application} from './application';

export class User {
  /* ? obligatoire pour primeng afin que l'objet n'est pas assigne avec tous ses attributs */
  constructor(public idUser?: number,
              public idRHUser?: string,
              public passwordUser?: string,
              public nameUser?: string,
              public firstNameUser?: string,
              public eMailUser?: string,
              public phoneUser?: string,
              public department?: Department,
              public profile?: Profile,
              public applications?: Application[],
              public roleList?: string[]) {

    this.idUser = idUser;
    this.idRHUser = idRHUser;
    this.passwordUser = passwordUser;
    this.nameUser = nameUser;
    this.firstNameUser = firstNameUser;
    this.eMailUser = eMailUser;
    this.phoneUser = phoneUser;
    this.department = department;
    this.profile = profile;
    this.applications = applications;
    this.roleList = roleList;
  }
}
