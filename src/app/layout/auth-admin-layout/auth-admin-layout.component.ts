import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent {
  constructor(private http:HttpClient){
  
  }
  login(usercre:{email:string,password:string}){
   
    this.http.post("http://127.0.0.1:4000/admin/login",usercre).subscribe ((res)=>console.log(res))
  }

}
