import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllusers(){
    return this.http.get('http://127.0.0.1:4000/userslkol')
  }

  adduser(){}
  
}
