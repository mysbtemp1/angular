import { Component, OnInit } from '@angular/core';
import { ImagesComponent } from '../layouts/partials/images/images.component';

import { ServerService } from '../../services/server.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
})
export class CrudComponent implements OnInit {

  new_image_path:string = '';
  new_image_description:string = '';

  constructor(private service: ServerService, 
    // private image_list: Array<Image>, private img_comp: ImagesComponent
    ) { }

  ngOnInit(): void {
  }

  test()
  {
    console.log(this.new_image_path);
    // new ImagesComponent.pushImage(new_image_path);
    this.service.saveImage(this.new_image_path, this.new_image_description);
    // this.new_image_path = '';
    // this.image_list = this.img_comp.getImageList();
  }

  getImageList() {
    return this.service.getImages();
  }

}
