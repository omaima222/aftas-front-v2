import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {RegisterDto} from "../../dtos/RegisterDto";
import {AuthenticateDto} from "../../dtos/AthenticateDto";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient, ){}

  constructor(private httpClient: HttpClient){ }

  register(user:RegisterDto): Observable<string>{
    this.removeToken()
    return this.httpClient.post<{ message : string }>(this.url + "auth/register", user)
      .pipe(
        map(response => {
          this.setToken(response.message)
          return response.message
        }),
      );
  }

  authenticate(user: AuthenticateDto): Observable<string> {
    this.removeToken();
    return this.httpClient.post<{ message : string }>(this.url + 'auth/authenticate', user)
      .pipe(
        map(response => {
          this.setToken(response.message)
          return response.message
        })
      );
  }

  logout(){
    this.removeToken();
    this.route.navigate(["/authenticate"]);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken():string | null{
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

}
