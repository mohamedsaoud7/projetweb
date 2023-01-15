import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddclientRoutingModule } from './addclient-routing.module';
import { AddclientComponent } from './addclient/addclient.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AddclientComponent
  ],
  imports: [
    CommonModule,
    AddclientRoutingModule,
    FormsModule
  ]
})
export class AddclientModule { }
