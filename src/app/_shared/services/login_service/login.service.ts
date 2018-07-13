import { Injectable } from '@angular/core';
import { User } from '../../model/user';


@Injectable()
export class LoginService {

  constructor() { }

  public getUser(): User {
    return {
      Id: 1,
      FirstName: 'Vitalii',
      LastName: 'Posidailo'
    };
  }
}
