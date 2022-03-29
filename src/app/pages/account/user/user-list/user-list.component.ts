import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import Swal from 'sweetalert2';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { UserDto } from '../../../../Services/User/Dto/UsertDto';
import { UserService } from '../../../../Services/User/user.service';

@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  
  users : Array<UserDto> = [];

  constructor(
    private _userService : UserService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() : void {
    this._userService.GetAll().subscribe( res => {
      this.users = res;
    })
  }

  registerUser(){
    this.router.navigate(['/pages/users/register'])
  }

  update(id){
    this.router.navigate(['/pages/users/register/'+id])
  }

  delete( userId : string ) {

    Swal.fire({
      title: 'Do you want to remove this user?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      
      if (result.isConfirmed) {
        this._userService.Delete(userId).subscribe( res => {
          this.users = this.users.filter(x => x.id !== userId)
          Swal.fire('Saved!', '', 'success')
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
