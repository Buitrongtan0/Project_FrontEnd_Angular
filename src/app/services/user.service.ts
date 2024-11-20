// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

// Define a User interface


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) { }

    getLogin(body:User): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`,body);
    }


    getSignUpUsers(body:User): Observable<any> {
        return this.http.post(`${this.apiUrl}/create-new-user`,body);
    }

}
