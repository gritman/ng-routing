/**
 * Created by Edwin on 2017/5/26.
 */
import {Product} from '../product/product.component';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

// 进入商品信息路由之前,先读取信息,读到之后再进入路由
// 如果读取不到信息,或者读取的信息有问题,就跳转到其他页面或者弹出提示
// 注解必须加括号,否则报错TS1238
@Injectable()
export class ProductResolve implements Resolve<Product> {

  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    const productId: number = route.params['id'];
    if (productId == 1) { // 此处不能用===
      return new Product(1, 'iPhone7');
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}
