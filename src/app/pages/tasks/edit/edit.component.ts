import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PersonDto } from '../../../Services/Person/Dto/PersonDto';
import { PersonService } from '../../../Services/Person/person.service';
import { TaskDto } from '../../../Services/Tasks/Dto/TasksDto';
import { TaskService } from '../../../Services/Tasks/task.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'ngx-task-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditTaskComponent implements OnInit {


  TaskForm: TaskDto;
  persons : Array<PersonDto> = [];
  status = [
    {id:1, value : 'Pending'},
    {id:2, value : 'InProgress'},
    {id:3, value : 'Done'},
    {id:4, value : 'rejected'}
  ];

  constructor(
    public bsModalRef: BsModalRef,
    public _taskService : TaskService,
    private _personService : PersonService
    ) {

     }

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(){
    this._personService.GetlAll().subscribe( res =>{
      let person = new PersonDto();
      this.persons.push(person);
      this.persons = this.persons.concat(res.data);
    })
  }


  onSubmit(){
    this._taskService.Update(this.TaskForm).subscribe( res => {
      this.bsModalRef.hide();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Task has been saved',
        showConfirmButton: false,
        timer: 7000
      })
    });
  }

  onStatusChange(value : number) {
    this.TaskForm.status = parseInt(value.toString());
  }

}
