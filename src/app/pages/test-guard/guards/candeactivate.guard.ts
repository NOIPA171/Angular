import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DeactivateComponent } from '../deactivate/deactivate.component';

@Injectable({
  providedIn: 'root',
})
export class CandeactivateGuard implements CanDeactivate<unknown> {
  /**
   * 當使用者要離開這個 Guard 所防守的路由時，會觸發這個函式
   *
   * @param {LoginComponent} component - 該路由的 Component
   * @param {ActivatedRouteSnapshot} currentRoute - 當前的路由
   * @param {RouterStateSnapshot} currentState - 當前路由狀態的快照
   * @param {RouterStateSnapshot} [nextState] - 欲前往路由的路由狀態的快照
   * @returns {(boolean | Observable<boolean> | Promise<boolean>)}
   * @memberof EnsureLoginGuard
   */
  canDeactivate(
    component: DeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isChecked = component.isChecked;
    if (!isChecked) {
      alert('Check the checkbox!');
    }
    return isChecked;
  }
}
