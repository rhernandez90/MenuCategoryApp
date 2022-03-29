import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbMenuModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserListComponent } from './account/user/user-list/user-list.component';
import { DxDataGridModule } from 'devextreme-angular';
import { MenuCategoryListComponent } from './MenuCategory/menu-category-list/menu-category-list.component';
import { CreateComponent } from './MenuCategory/create/create.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    FormsModule,
    RouterModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbUserModule,
    NbIconModule,
    NbButtonModule,
    DxDataGridModule,
    ModalModule.forRoot()
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    MenuCategoryListComponent,
    CreateComponent,
  ],
})
export class PagesModule {
}
