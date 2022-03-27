import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbMenuModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../Services/Project/project.service';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateTaskComponent } from './tasks/create/create.component';
import { EditTaskComponent } from './tasks/edit/edit.component';
import { UserListComponent } from './account/user/user-list/user-list.component';
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule,
    RouterModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbUserModule,
    NbIconModule,
    NbButtonModule,
    
    ModalModule.forRoot()
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    TasksComponent,
    CreateTaskComponent,
    EditTaskComponent,
    UserListComponent
  ],
})
export class PagesModule {
}
