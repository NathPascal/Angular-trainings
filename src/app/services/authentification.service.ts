import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private users = [
    { email: 'elbab@gmail.com', password: '1234', roles: ['ADMIN', 'USER'] },
    { email: 'hugo@gmail.com', password: '1234', roles: ['USER'] },
  ];

  private loggedInUser: any = null;

  constructor() { 
    let auth = localStorage.getItem('/user');
    if(auth){
      this.loggedInUser= JSON.parse('auth')
    }
  }

  login(email: string, password: string){
    const user = this.users.find(info => info.email === email && info.password === password);
    if (user){
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  isLoggedIn() : boolean{
    return this.loggedInUser !== null;
  }

  saveLog(){
    localStorage.setItem('auth', JSON.stringify(this.loggedInUser));
  }
  
}
