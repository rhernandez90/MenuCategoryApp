import { Component, OnInit } from '@angular/core';
import { RegisterUserDto } from '../../../Services/authentication/Dto/RegisterUserDto';
import { LoginService } from '../../../Services/authentication/login/login.service';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../Services/User/user.service';
@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: RegisterUserDto;
  saveButtonTitle = "Register";
  updating = false;

  constructor(
    private _loginService: LoginService,
    private _userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.user = new RegisterUserDto();

    this.route.paramMap.subscribe(params => {

      if (params['params'].id) {
        this.loadUser(params['params'].id);
        this.saveButtonTitle = "Update";
        this.updating = true;
      }
    });
  }

  loadUser(id: string) {
    this._userService.GetById(id).subscribe(res => {
      this.user.id = id;
      this.user.username = res.username;
      this.user.email = res.email;
      this.user.role = res.roles;
      this.user.password = res.password;
    })
  }

  cancel() {
    this.router.navigate(['/pages/users'])
  }

  onSubmit(): void {
    if (this.updating) 
      this.update();
    else
      this.save()
  }

  save(){
    this._loginService.register(this.user).subscribe(res => {
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
  
  update() {
    this._userService.Update(this.user).subscribe(res => {
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

