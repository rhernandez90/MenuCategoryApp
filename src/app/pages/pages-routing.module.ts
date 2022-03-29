import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProjectModalComponent } from './dashboard/add-project-modal/add-project-modal.component';
import { UserListComponent } from './account/user/user-list/user-list.component';
import { RegisterComponent } from './account/register/register.component';
import { MenuCategoryListComponent } from './MenuCategory/menu-category-list/menu-category-list.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateComponent } from './MenuCategory/create/create.component';
;

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // {
    //   path: 'dashboard',
    //   component: ECommerceComponent,
    // },
    {
      path: 'project-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'project/create',
    component: AddProjectModalComponent
    },
    {
      path: 'users',
      component: UserListComponent,
    },
    {
      path: 'menucategories',
      component: MenuCategoryListComponent,
    },
    {
      path: 'menucategories/create',
      component: CreateComponent,
    },
    {
      path: 'users/register',
      component: RegisterComponent,
    },
    {
      path: 'project-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    // {
    //   path: '**',
    //   component: NotFoundComponentComponent,
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
