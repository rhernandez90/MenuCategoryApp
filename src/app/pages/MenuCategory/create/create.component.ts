import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MenuCategoryDto } from '../../../Services/MenuCategory/Dto/MenuCategoryDto';
import { IMenuCategoryList } from '../../../Services/MenuCategory/Dto/MenuCategoryListDto';
import { MenuCategoryService } from '../../../Services/MenuCategory/menucategory.service';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  menuCategories : Array<IMenuCategoryList> = [];
  menuCategory : MenuCategoryDto; 


  constructor(
    private _menucategoryService : MenuCategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuCategory = new MenuCategoryDto();
    this.loadMenucategories();
  }

  loadMenucategories() : void {
    this._menucategoryService.GetAll().subscribe( res => {
      this.menuCategories =  res;
    });
  }


  cancel(){
    this.router.navigate(['/pages/menucategories'])
  }

  onSubmit(): void {
    this._menucategoryService.Create(this.menuCategory).subscribe(res =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User has been saved',
        showConfirmButton: false,
        timer: 7000
      })
      this.router.navigate(['/pages/menucategories'])
      window.location.reload();
    })
  }
  
}
