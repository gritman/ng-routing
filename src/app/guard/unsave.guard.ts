import {CanDeactivate} from '@angular/router';
import {ProductComponent} from '../product/product.component';
/**
 * Created by Edwin on 2017/5/26.
 */
// 用户必须执行了保存操作才能离开当前页面
  // 父类是泛型类,指定要保护的组件
export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    // 传入ProductComponent是为了判断其属性,看是否可以离开
    return window.confirm('你还没有保存,确定要离开吗?');
  }

}
