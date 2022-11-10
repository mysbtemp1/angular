import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
})
export class CrudComponent implements OnInit {

  new_image_path:string = '';
  new_image_description:string = '';

  constructor(private service: ServerService) { }

  ngOnInit(): void { }

  saveImage() {
    this.service.saveImage(this.new_image_path, this.new_image_description);
    this.new_image_path = '';
    this.new_image_description = '';
  }

  getImageList() {
    return this.service.getImages();
  }

  deleteImage(id: number) {
    this.service.deleteImage(id);
  }

  editImage(id: number) {
    this.service.editImage(id);
  }

}
