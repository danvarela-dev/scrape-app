import { Component, OnInit } from '@angular/core';
import { user } from '../model/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profile',
  template: `
    <h1 class="container">GitHub Profile Scraper</h1>

    <div class="container">
      <div class="box">
        <br />
        <input
          id="id-text"
          class="input"
          type="text"
          placeholder="Github username"
        />
        <button (click)="setId()">Agregar Perfil</button>
      </div>
    </div>
    <br />
    <br />
    <ul class="list-group">
      <div *ngFor="let item of list" class="list container col-sm-3">
        <li class="list-group-item">
          <img src="{{ item.avatar_url }}" alt="pic" align=left />
          <h2>{{ item?.name }}</h2>
          <p>{{ item?.company }}</p>
        </li>
      </div>
    </ul>
  `,
  styles: [
    `
    * {
        text-align: center;
        list-style: none;
      }

      .box {
        border-style: ridge;
      }

      .list{
        margin:50px;
      }
      
      
      img {
        width: 120px;
        height: 120px;
      }
      .list-group-item{
        height:140px; 
      }
      
    `,
  ],
})
export class ProfileComponent {
  constructor(private usersvc: UserService) {}
  id;

  list: any[];

  setId() {
    this.id = (document.getElementById('id-text') as HTMLInputElement).value;
    this.list = this.usersvc.getUser(this.id);
  }
}
