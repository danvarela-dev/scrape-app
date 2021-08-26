import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from '../model/user-model';




@Injectable()
export class UserService {
    private listUsers: user[];
 constructor(private http:HttpClient){
    this.listUsers=[];
 }

getUser(id){
    
    this.http.get<user[]>(`https://api.github.com/users/${id}`).subscribe(data=>{

    this.listUsers.push(data);
    console.log(this.listUsers);    
});

return this.listUsers;
}


}

