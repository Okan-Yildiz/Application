import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl='https://localhost:7055/api/user' 

  constructor(private http: HttpClient) { }



  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }

addUser(user: User):Observable<User>{
  user.EntryNo="00000000-0000-0000-0000-000000000000";
  return this.http.post<User>(this.baseUrl, user);
}



}
