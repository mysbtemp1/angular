import { Component, OnInit } from '@angular/core';
import { Image } from '../../../../models/image.model';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
})
export class ImagesComponent implements OnInit {

  images_array: Image[] = [
    new Image('https://www.w3schools.com/w3images/kitchenconcrete.jpg', 'kitchen concrete'),
    new Image('https://www.w3schools.com/w3images/diningroom.jpg', 'dining room'),
    new Image('https://www.w3schools.com/w3images/livingroom.jpg', 'living room'),
    new Image('https://www.w3schools.com/w3images/atrium.jpg', 'atrium'),
    new Image('https://www.w3schools.com/w3images/bedroom.jpg', 'bedroom'),
    new Image('https://www.w3schools.com/w3images/livingroom2.jpg', 'living room2'),
  ]

  constructor() { 

   }

  ngOnInit(): void {
  }

  pushImage(text:string) {

  }
}
