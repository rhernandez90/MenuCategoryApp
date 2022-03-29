import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IMenuCategoryList } from '../../../Services/MenuCategory/Dto/MenuCategoryListDto';
import { MenuCategoryService } from '../../../Services/MenuCategory/menucategory.service';

@Component({
  selector: 'ngx-menu-category-list',
  templateUrl: './menu-category-list.component.html',
  styleUrls: ['./menu-category-list.component.scss']
})
export class MenuCategoryListComponent implements OnInit {

  menuCategories : Array<IMenuCategoryList> = [];

  constructor(
    private _menucategoryService : MenuCategoryService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.loadMenucategories();
  }

  loadMenucategories() : void {
    this._menucategoryService.GetAll().subscribe( res => {
      this.menuCategories =  res;
    });
  }

  addMenu(){
    this.router.navigate(['/pages/menucategories/create'])
  }


  delete( id : number ) {

    Swal.fire({
      title: 'Do you want to remove this menu?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      
      if (result.isConfirmed) {
        this._menucategoryService.Delete(id).subscribe( res => {
          this.menuCategories = this.menuCategories.filter(x => x.id !== id)
          Swal.fire('Saved!', '', 'success')
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
