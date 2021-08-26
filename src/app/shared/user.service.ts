import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from '../model/model';


@Injectable()
export class UserService {
 constructor(private http:HttpClient){

 }

getUser(id):Observable<user[]>{
    return this.http.get<user>(`https://api.github.com/users/${id}`);

}


}

