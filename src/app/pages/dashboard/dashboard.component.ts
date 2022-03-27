import {Component, OnDestroy, OnInit} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NbThemeService } from '@nebular/theme';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { ProjectService } from '../../Services/Project/project.service';
import { OverdueTasksComponent } from './overdue-tasks/overdue-tasks.component';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy,OnInit {

  projects : Array<any> = [];
  bsModalRef: BsModalRef;
  constructor(
    private _projectService : ProjectService,
    private router : Router,
    private modalService: BsModalService
  ) {


  }


  ngOnInit(): void {
    this._projectService.GetlAll().subscribe( res => {
      this.projects = res.data;
      console.log( res);
    })
  }

  goToTasks(id : number){
    let navigationExtras: NavigationExtras = {
			queryParams: {
				"id": id
			}
		};
    this.router.navigate(['/pages/tasks'], navigationExtras)
  }

  goToCreateProject(){
    this.router.navigate(['/pages/project/create'])
  }

  ngOnDestroy() {
    
  }

  openModalWithComponent(projectId : number) {

    const initialState = {
      projectId : projectId

    };

    this.bsModalRef = this.modalService.show(OverdueTasksComponent, {initialState});
    this.bsModalRef.onHidden.subscribe( res =>{
        
    })
  }
  
}
