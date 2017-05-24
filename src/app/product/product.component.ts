import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // 订阅属性,把路由参数id绑定到productId上
    // 是rxjs的语法
    // 有了订阅,下面的参数快照方法就可以注释掉了
    this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
    // 这个是参数快照方法,路由到此组件后,再次路由到此组件(参数不同),则取到的还是上一次的参数
    // 因为这种情况下,组件只创建一次
    //// this.productId = this.routeInfo.snapshot.params['id'];

  }

}
