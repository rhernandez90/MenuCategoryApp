import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../Services/Project/project.service';
import { SmartTableData } from '../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateTaskComponent } from './create/create.component';
import { TaskDto } from '../../Services/Tasks/Dto/TasksDto';
import { PersonService } from '../../Services/Person/person.service';
import { PersonDto } from '../../Services/Person/Dto/PersonDto';
import { EditTaskComponent } from './edit/edit.component';
@Component({
  selector: 'ngx-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  bsModalRef: BsModalRef;
  project : number = 0;
  tasks : Array<any> = [];
  status : number = 0;
  persons : Array<PersonDto> = [];
  

  constructor(
    private _projectService : ProjectService,
    private route: ActivatedRoute,
    private modalService: BsModalService

  ) {

   }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      this.project  = parseInt(params["id"]);
      this.loadTasks();
    })


  }

  loadTasksByStatus(){
    this._projectService.GetTasksByStatus(this.project, this.status).subscribe( res =>{
      this.tasks = res.data;
    })
  }

  loadAllTasksByStatus(){
    this._projectService.GetAllTasksByStatus(this.project).subscribe( res =>{
      this.tasks = res.data;
    })
  }

  loadTasks(){
    if(this.status  == 0)
      this.loadAllTasksByStatus();
    else 
      this.loadTasksByStatus();
  }


  openModalWithComponent() {
    let newTask = new TaskDto();
    let now = new Date();
    newTask.projectId = this.project;
    newTask.startDate = now.toISOString().slice(0, 16);
    newTask.endDate = now.toISOString().slice(0, 16);
    const initialState = {
      TaskForm : newTask

    };

    this.bsModalRef = this.modalService.show(CreateTaskComponent, {initialState});
    this.bsModalRef.onHidden.subscribe( res =>{
        this.loadTasks();
    })
  }

  openEditModal( item : TaskDto){

    const initialState = {
      TaskForm : {...item}
    }
    this.bsModalRef = this.modalService.show(EditTaskComponent, {initialState});
    this.bsModalRef.onHidden.subscribe( res =>{
        this.loadTasks();
    })
  }


}
