import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent {
  constructor(private http:HttpClient){}
  ngOninit(): void {

  }
  add(user:{firstname:string,lastname:string,email:string,password:string,age:number,phonenumber:string,solde:number}){
    this.http.post("http://127.0.0.1:4000/ziduser",user).subscribe ((res)=>console.log(res))
    console.log(user)
    
  }

}
