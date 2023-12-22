import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  baseUrl:any="http://localhost:8080";
  public generateToken(userLoginData:any)
  {
    return this.http.post(`${this.baseUrl}/generateToken`, userLoginData);
  }

  public loginUser(token:any)
  {
    localStorage.setItem('token',token);
    return true;
  }

  public isLogin()
  {
    let tokenStr=localStorage.getItem('token');
    if(tokenStr==null || tokenStr=='' || tokenStr==undefined)
    {
      return false;

    }
    else
    {
      return true;
    } 
  }

  public logout()
  {
    localStorage.removeItem('token');
    return true;
  }

  public getToken()
{
     return localStorage.getItem('token');

}

setUserDetails(user:any)
{
  localStorage.setItem('user',JSON.stringify(user));
}

getUserDetails()
{
 let userStr= localStorage.getItem('user');
 if (userStr !=null) {
  return JSON.parse(userStr);
 }
 else{
  this.logout();
  return null;
 }
}
 public getUserRole()
{
  let user=this.getUserDetails()
  return user.userRoles[0].rolename;
}

public getCurrentUser()
{
  return this.http.get(`${this.baseUrl}/current-user`);
}

}
