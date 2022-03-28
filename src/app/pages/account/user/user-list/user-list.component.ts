import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
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
      this.users = res["$values"];
    })
  }

  registerUser(){
    this.router.navigate(['/pages/users/register'])
  }

}
