import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  email = '';
  password = '';

  constructor(public authentificationService : AuthentificationService , private router : Router) { }

  ngOnInit(): void {}

  onSubmit(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)){
      console.log("Adresse mail invalide");
      return;}
    
    if (this.authentificationService.login(this.email, this.password)) {
      this.router.navigateByUrl('/cart');
  } else {
      console.log("Identifiants incorrects");
  }

  }


}
