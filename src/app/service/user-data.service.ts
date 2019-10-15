import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  /**
   * liste des utilisateurs de l'application
   */

  private availableUsers: User[];

  /**
   * liste observable rendu visible partout dans application
   */

  availableUsers$: BehaviorSubject<User[]> = new BehaviorSubject(this.availableUsers);

  constructor(private httpClient: HttpClient) {
  }

  /**
   * cherche tous les utilisateurs grâce à la methode CRUD
   */

  public getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:8080/api/utilisateur');
  }

  /**
   * fonction chargee une fois au demarrage de l'application
   * recupere la liste des utilisateurs depuis la base de donnees et met a jour la liste et la liste observable
   */

  public publishUser() {
    this.getUser().subscribe(
      usersList => {
        this.availableUsers = usersList;
        this.availableUsers$.next(this.availableUsers);
      });
  }
}
