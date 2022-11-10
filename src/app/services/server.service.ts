import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private is_logged_in = true;
  private url1 = 'http://localhost:8000/api/images';
  private url2 = 'http://localhost:8000/api/image/save';
  private url3 = 'http://localhost:8000/api/image/delete';
  images_array: Image[] = [];

  constructor(private http: HttpClient) { }

  fetchImages() {
    this.http.get(this.url1)
    .subscribe(response => {

      this.images_array = [];

      for(const [index, data] of Object.entries(response)) {
        if (index == 'images') {
          for(const [index, data2] of Object.entries(data)) {
            this.images_array.push(new Image(data[index].id, data[index].path, data[index].description));
          };
        }
      };
    });
  }

  getImages() {
    return this.images_array;
  }

  saveImage(path: string, description: string){
    this.http.post(this.url2, { path: path, description: description })
    .subscribe(response => {
      this.fetchImages();
    });
  }

  deleteImage(id: number) {
    this.http.post(this.url3, { id: id })
    .subscribe(response => {
      this.fetchImages();
    });
  }

  editImage(id: number) {
    this.http.post(this.url3, { id: id })
    .subscribe(response => {
      this.fetchImages();
    });
  }

  isLoggedIn() {
    return this.is_logged_in;
  }

  logout() {
    this.is_logged_in = false;
  }
}
