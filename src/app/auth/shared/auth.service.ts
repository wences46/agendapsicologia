import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Credentials, Usuario } from './auth.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(credentials: Credentials) {
    return this.http.post(environment.loginUrl, credentials, {
      observe: 'response'
    })
      .pipe(map((response: HttpResponse<any>) => {
        const body = response.body;
        const headers = response.headers;

        console.log('headers', headers);

        const bearerToken = headers.get('Authorization')!;
        const token = bearerToken.replace('Bearaer ', '');
        const tokenData: any = jwtDecode(token);
        
        console.log('tokenData', tokenData);

        const expiresAt = moment('1970-01-01').add(tokenData.exp, 'seconds');

        console.log('expiresAt', expiresAt, tokenData.exp);

        localStorage.setItem('miagenda_user_id', tokenData.userId);
        localStorage.setItem('miagenda_name', tokenData.name);
        localStorage.setItem('miagenda_role', tokenData.role);
        localStorage.setItem('miagenda_token', token);
        localStorage.setItem('miagenda_expires_at', JSON.stringify(expiresAt.valueOf()));

        return body;
      }))

    }
      get name(){      
      return localStorage.getItem('miagenda_name') || '';
    }
  
    get token() {
      return localStorage.getItem('miagenda_token');
    }
  
    isAdmin() {
      return localStorage.getItem('miagenda_role') === 'ADMIN';
    }
  
    isLoggedIn() {
      const expiration = localStorage.getItem('miagenda_expires_at');
  
      if (expiration) {
        return moment().isBefore(moment(JSON.parse(expiration)));
      }
      return false;
    }
  
    logout() {
      localStorage.removeItem('miagenda_user_id');
      localStorage.removeItem('miagenda_name');
      localStorage.removeItem('miagenda_role');
      localStorage.removeItem('miagenda_token');
      localStorage.removeItem('miagenda_expires_at');
    }
  
    registrar(usuario: Usuario) {
      return this.http.post(`${environment.apiBase}/auth/registrar`, usuario);
    }
  
    verficarEmail(email: string) {
      return this.http.get(`${environment.apiBase}/auth/verificar-email?email=${email}`);
    }
  
  }

  

      
   