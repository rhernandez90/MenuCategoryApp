import { Component } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { TokenStorageService } from '../Services/authentication/TokenStorage/token-storage.service';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  //menu = MENU_ITEMS;
  menu = [];
  newMenuItem: NbMenuItem[] = [
  {
    title: 'users',
    icon: 'lock-outline',
    link: '/pages/users',

  }]

  constructor( private nbMenuService: NbMenuService, private _tokenStorage : TokenStorageService, ) {

    if(this._tokenStorage.getUser().roles == "Admin"){
      this.nbMenuService.addItems(this.newMenuItem);
    }

  }


}
