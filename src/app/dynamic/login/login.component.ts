import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../model/user';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import {Title} from '@angular/platform-browser';
import {UserDataService} from '../../service/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /*usersList: BehaviorSubject<User[]>;
  editedUser: User[];

  loginForm = this.fb.group({
    idRHUser: [null, Validators.compose([
      Validators.required,
      Validators.pattern('[a-zA-Z]{4}[0-9]{3}')])],
    passwordUser: [null, Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255)])
    ]
  });*/

  constructor(/*private userService: UserDataService,
              private router: Router,
              private fb: FormBuilder,
              private loginService: LoginService,
  private title: Title*/) { }

  ngOnInit() {
    /*this.title.setTitle('GestiCert - Authentification');
    this.usersList = this.userService.availableUsers$;
    this.getUser();*/
  }

  /*onSubmit() {
    const user = new User();
    user.idRHUser = this.loginForm.value.idRHUser.toLowerCase();
    user.passwordUser = this.loginForm.value.passwordUser;
    this.loginService.signIn(user);
  }

  getUser(): void {
    this.userService.getUser().subscribe(users => this.editedUser = users);
  }*/

}
