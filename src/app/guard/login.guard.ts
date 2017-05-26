import {CanActivate} from '@angular/router';
/**
 * Created by Edwin on 2017/5/26.
 */
export class LoginGuard implements CanActivate {
  canActivate() {
    const loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn) {
      console.log('用户未登录');
    }
    return loggedIn;
  }
}
