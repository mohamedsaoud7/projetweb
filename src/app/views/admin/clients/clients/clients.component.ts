import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  dataArray:any
  constructor(private ds:DataService,private http:HttpClient){
    this.ds.getAllusers().subscribe(data=>this.dataArray=data)
  }
  clk(email:string){
    this.http.delete("http://127.0.0.1:4000/na7iuser/"+ email).subscribe((res)=>console.log(res))
    console.log(email)
  }

}
