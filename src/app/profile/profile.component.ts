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
          id="id"
          class="input"
          type="text"
          placeholder="Github username"
        />
        <button (click)="setId()">Agregar Perfil</button>
      </div>
    </div>
    <br />
    <br />
    <div *ngFor="let item of list" class="list wrap container col-sm-3">
      <li >
        <img src="{{ item.avatar_url }}" alt="pic" align=left />
        <h2>{{ item?.name }}</h2>
        <p>{{ item?.company }}</p>
        <br>
      </li>
    </div>
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
      
    `,
  ],
})
export class ProfileComponent {
  constructor(private usersvc: UserService) {}
  id;

  list: any[];

  setId() {
    this.id = (document.getElementById('id') as HTMLInputElement).value;
    this.list = this.usersvc.getUser(this.id);
  }
}
