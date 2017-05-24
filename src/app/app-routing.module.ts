import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [
  {
    path: '', // 把默认路由重定向到home
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', // 注意path不能以/开头
    component: HomeComponent
  },
  {
    path: 'product/:id', // 这是根路由,不是子路由
    component: ProductComponent,
    children: [
      {
        path: '', // 这是子路由
        component: ProductDescComponent
      },
      {
        path: 'seller/:id',
        component: SellerInfoComponent
      }
    ]
  },
  {
    path: '**', // 路由表是按先后顺序匹配的,所以通配路由必须放在最后面
    component: Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
