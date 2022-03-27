import { Component, OnInit } from '@angular/core';
import { RegisterUserDto } from '../../../Services/authentication/Dto/RegisterUserDto';
import { LoginService } from '../../../Services/authentication/login/login.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user : RegisterUserDto;

  constructor(
    private _loginService : LoginService
  ) { 

  }

  ngOnInit(): void {
    this.user = new RegisterUserDto();
  }

  onSubmit(): void {
    this._loginService.register(this.user).subscribe(res =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User has been saved',
        showConfirmButton: false,
        timer: 7000
      })
    })
  }

}
