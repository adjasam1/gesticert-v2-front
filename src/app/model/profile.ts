import {User} from './user';

export class Profile {
  constructor(public idProfile?: number,
              public typeProfile?: string,
              public users?: User[]) {

    this.idProfile = idProfile;
    this.typeProfile = typeProfile;
    this.users = users;
  }
}
