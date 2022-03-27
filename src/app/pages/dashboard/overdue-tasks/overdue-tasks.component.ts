import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TaskDto } from '../../../Services/Tasks/Dto/TasksDto';
import { TaskService } from '../../../Services/Tasks/task.service';

@Component({
  selector: 'ngx-overdue-tasks',
  templateUrl: './overdue-tasks.component.html',
  styleUrls: ['./overdue-tasks.component.scss']
})
export class OverdueTasksComponent implements OnInit, AfterContentChecked {

  projectId = 0;
  tasks : Array<TaskDto> = [];
  constructor(
    public bsModalRef: BsModalRef,
    private _taskService : TaskService
  ) { }


  ngAfterContentChecked(): void {

  }

  ngOnInit(): void {
    this.bsModalRef.setClass('modal-lg')
    
    this._taskService.GetOverdueTasks(this.projectId).subscribe( res =>{
      this.tasks = res.data;
    })
      
  }

}
