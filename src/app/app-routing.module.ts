import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { Code404Component } from './code404/code404.component';
import { ChatComponent } from './chat/chat.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {
    path: '', // 把默认路由重定向到home
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    component: ChatComponent,
    outlet: 'aux' // 辅助路由,这个路由的目标组件,会显示在aux插座上,其他路由显示在没名字的插座上
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
    ],
    canActivate: [ // 设置路由守卫,可以设置多个,会被依次调用,如果有一个返回false,则不能进入该路由
      LoginGuard
    ]
  },
  {
    path: '**', // 路由表是按先后顺序匹配的,所以通配路由必须放在最后面
    component: Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard] // 通过依赖注入来实例化LoginGuard,要在这里声明
})
export class AppRoutingModule { }
