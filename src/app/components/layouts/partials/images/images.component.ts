import { Component, OnInit } from '@angular/core';
import { Image } from '../../../../models/image.model';

import { ServerService } from '../../../../services/server.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
})
export class ImagesComponent implements OnInit {

  constructor(private service: ServerService) { }

  ngOnInit(): void { }

  getImageList() {
    return this.service.getImages();
  }
}
