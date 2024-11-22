import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private users = [
    { email: 'elbab@gmail.com', password : this.encryptPassword('1234'), roles: ['ADMIN', 'USER'] },
    { email: 'hugo@gmail.com', password : this.encryptPassword('1234'), roles: ['USER'] },
  ];

  private loggedInUser: any = null;

  

  constructor() { 
    let auth = localStorage.getItem('auth');
    if(auth){
      this.loggedInUser= JSON.parse(auth)
    }
  }

  login(email: string, password: string){
    const user = this.users.find(info => info.email === email);
    if (user && this.decryptPassword (user.password) === password){
      this.loggedInUser = user;
      this.saveLog();
      return true;
    }
    return false;
  }

  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('auth');
  }

  isLoggedIn() : boolean{
    return this.loggedInUser !== null;
  }

  decryptPassword(encryptedPassword : string) : string {
    const byte = CryptoJS.AES.decrypt(encryptedPassword, 'secret-key');
    return byte.toString(CryptoJS.enc.Utf8);
  }

  encryptPassword(password: string): string {
    return CryptoJS.AES.encrypt(password, 'secret-key').toString();
  }

  saveLog(){
    localStorage.setItem('auth', JSON.stringify(this.loggedInUser));
  }
  
}
