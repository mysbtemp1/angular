import { Component, OnInit } from '@angular/core';
import { Image } from '../../../../models/image.model';

import { ServerService } from '../../../../services/server.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
})
export class ImagesComponent implements OnInit {

  images_array: Image[] = [];

  constructor(private service: ServerService) { 

   }

  ngOnInit(): void {

    this.service.getImages()
      .subscribe(response => {
        for(const [index, data] of Object.entries(response)) {
          if (index == 'images') {
            for(const [index, data2] of Object.entries(data)) {
              this.images_array.push(new Image(data[index].path, data[index].description));
            };
          }
          if (index == 'token') {
            this.service.setToken(data);
          }
        };
      });
  }

  getImageList() {
    return this.images_array;
  }
}
