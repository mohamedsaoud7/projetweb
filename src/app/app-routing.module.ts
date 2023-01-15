import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';

const routes: Routes = [
  {path:'' ,component : FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)},
    {path:'ajout',loadChildren:()=>import('./views/front/ajout/ajout.module').then(m=>m.AjoutModule)},
    {path:'transfert',loadChildren:()=>import('./views/front/transfert/transfert.module').then(m=>m.TransfertModule)},
    {path:'retrait',loadChildren:()=>import('./views/front/retrait/retrait.module').then(m=>m.RetraitModule)},
    {path:'consult',loadChildren:()=>import('./views/front/consult/consult.module').then(m=>m.ConsultModule)},
    
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'clients',loadChildren:()=>import('./views/admin/clients/clients.module').then(m=>m.ClientsModule)},
    {path:'addclient',loadChildren:()=>import('./views/admin/addclient/addclient.module').then(m=>m.AddclientModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'loginadmin',loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)},
  ]},
  {path:'admin/login' , component :AuthAdminLayoutComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
