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
          this.images_array.push(new Image(data.path, data.description));
        };
      });
  }

  pushImage(text:string) {

  }
}
