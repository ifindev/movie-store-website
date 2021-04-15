import { Injectable } from '@angular/core';

import { usersData } from '../data/userDemoData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usersData = usersData;

  /* Login Auth */
  authLogin(userLogin: {
    email: string;
    password: string;
  }): { status: number; msg: string } {
    const found = usersData.find(
      (user) =>
        user.email === userLogin.email && user.password === userLogin.password
    );
    if (found) {
      return {
        status: 202,
        msg: 'login success',
      };
    } else {
      return {
        status: 500,
        msg: 'user not found',
      };
    }
  }

  constructor() {}
}
