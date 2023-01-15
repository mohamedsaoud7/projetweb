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
  constructor(private ds:DataService){
    this.ds.getAllusers().subscribe(data=>this.dataArray=data)
  }

}
