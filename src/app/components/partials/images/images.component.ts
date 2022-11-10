import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../../services/server.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
})
export class ImagesComponent implements OnInit {

  modalStyle = '';

  constructor(private service: ServerService) { }

  ngOnInit(): void { }

  getImageList() {
    return this.service.getImages();
  }

  onClickImage(element: Element) {
    // document.getElementById("img01").src = element.src;
    // document.getElementById("modal01").style.display = "block";
    // var captionText = document.getElementById("caption");
    // captionText.innerHTML = element.alt;
  }

  onClickModal() {
    this.modalStyle = 'd-none';
  }
}
