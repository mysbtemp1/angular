import { Component, OnInit } from '@angular/core';
import { ImagesComponent } from '../layouts/partials/images/images.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
})
export class CrudComponent implements OnInit {

  new_image_path:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  test()
  {
    console.log(this.new_image_path);
    this.new_image_path = '';
    // new ImagesComponent.pushImage(new_image_path);
  }

}
