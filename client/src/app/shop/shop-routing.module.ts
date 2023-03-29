import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProducDetailsComponent } from './produc-details/produc-details.component';
import { ShopComponent } from './shop.component';

const routes :Routes=[
  {path:'',component:ShopComponent},
  {path:':id',component:ProducDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],exports:[
    RouterModule
  ]
})
export class ShopRoutingModule { }
