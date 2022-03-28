import { Component, OnInit } from '@angular/core';
import { RegisterUserDto } from '../../../Services/authentication/Dto/RegisterUserDto';
import { LoginService } from '../../../Services/authentication/login/login.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user : RegisterUserDto;

  constructor(
    private _loginService : LoginService,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.user = new RegisterUserDto();
  }

  cancel(){
    this.router.navigate(['/pages/users'])
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
      this.router.navigate(['/pages/users'])
    })
  }

}
