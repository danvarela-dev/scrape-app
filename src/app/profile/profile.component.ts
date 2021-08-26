import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profile',
  template: `
    <h1 class= "container">GitHub Profile Scraper</h1>

<div class="container">
  <div class = "box">
    <br>
    <input id="id" class="input" type="text" placeholder="Github username"  />
    <button (click)="setId()">Agregar Perfil</button>
  </div>
</div>
  `,
  styles: [`
     .box{
    border-style: ridge;
   }

   *{
     text-align:center;
     margin: 0 auto;
   }
  
  
  `]
})

export class ProfileComponent {
id;

   constructor(private usersvc: UserService) { }

 


  setId(){
   
    //this.id = (document.getElementById("id") as HTMLInputElement).value;
    this.usersvc.getUser();
  }

}
