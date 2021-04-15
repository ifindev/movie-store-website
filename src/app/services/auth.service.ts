import { Injectable } from '@angular/core';

import { usersData } from '../data/userDemoData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usersData = usersData;

  /* Login Auth */
  authLogin(userLogin: {
    username: string;
    password: string;
  }): { status: number; msg: string } {
    const found = usersData.find(
      (user) =>
        user.username === userLogin.username &&
        user.password === userLogin.password
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

  /* Auth Sign Up */
  authSignup(userSignup: {
    namaLengkap: string;
    username: string;
    email: string;
    password: string;
  }): { status: number; msg: string } {
    /* Validate that all fields are filled */
    if (
      userSignup.namaLengkap == '' ||
      userSignup.email == '' ||
      userSignup.username == '' ||
      userSignup.password == ''
    ) {
      return {
        status: 502,
        msg: 'missing data some data for signup',
      };
    } else {
      /* Check availibility of username and email in database */
      const found = usersData.find(
        (user) =>
          user.username === userSignup.username &&
          user.email === userSignup.email
      );

      if (!found) {
        return {
          status: 203,
          msg: 'signup success',
        };
      } else {
        return {
          status: 503,
          msg: 'user with that email or username is already exist',
        };
      }
    }
  }

  constructor() {}
}
