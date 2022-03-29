import { Component } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { TokenStorageService } from '../Services/authentication/TokenStorage/token-storage.service';
import { MenuCategoryService } from '../Services/MenuCategory/menucategory.service';

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
    icon: 'person',
    link: '/pages/users',
  },
  {
    title: 'Menucategories',
    icon: 'list',
    link: '/pages/menucategories',
  },
]

  constructor( 
    private nbMenuService: NbMenuService, 
    private _tokenStorage : TokenStorageService,
    private _menuCategoryService : MenuCategoryService
    ) {

    if(this._tokenStorage.getUser().roles == "Admin"){
      this.nbMenuService.addItems(this.newMenuItem);
    }

    this.loadTreeMenu();
  }

  async loadTreeMenu()  {
    let menu = await this._menuCategoryService.GetTree().toPromise();
    this.nbMenuService.addItems(menu);    
  }


}
