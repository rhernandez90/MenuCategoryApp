import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../../Services/Project/project.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.scss']
})
export class AddProjectModalComponent implements OnInit {

  projectForm: any = {
    name: null,
    description: null,
    backgroundColor : '#2cce6a'
  };

  constructor(
    private _projectService : ProjectService,
    private router : Router
  ) 
  { 

  }

  ngOnInit(): void {
  }

  onSubmit() : void {

    this._projectService.Create(this.projectForm).subscribe(res => {
      this.router.navigate(['/pages/project-dashboard']);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Project has been saved',
        showConfirmButton: false,
        timer: 7000
      })
    })
  }

  
}
