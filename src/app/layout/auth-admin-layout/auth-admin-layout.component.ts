import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent {
  constructor(private http:HttpClient,private router:Router){
  
  }
  login(usercre:{email:string,password:string}){
  
    this.http.post("http://127.0.0.1:4000/admin",usercre).subscribe((res)=>{
      if(res!==null) this.router.navigate(["/admin/dashboard"])
      console.log(res)
    })
    }
    
      };
  
  

