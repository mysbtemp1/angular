import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  private get_images_url = 'http://localhost:8000/api/images';
  private post_image_url = 'http://localhost:8000/api/image/save';

  private _token = '';
  images_array: Image[] = [];

  constructor(private http: HttpClient) { }

  fetchImages() {
    this.http.get(this.get_images_url)
    .subscribe(response => {

      this.images_array = [];

      for(const [index, data] of Object.entries(response)) {
        if (index == 'images') {
          for(const [index, data2] of Object.entries(data)) {
            this.images_array.push(new Image(data[index].path, data[index].description));
          };
        }
        if (index == 'token') {
          this._token = data;
        }
      };
    });
  }

  getImages() {
    return this.images_array;
  }

  saveImage(path: string, description: string){
    console.log('in post' + path);
    // console.log(localStorage.getItem(''));
    var headers = new Headers();
    headers.append('X-CSRF-TOKEN', this._token);
    // let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.post(this.post_image_url, { path: path, description: description })
      .subscribe(
        response => {
          // console.log(response);
          
        }
      );
  }

  setToken(data: string) {
    this._token = data;
  }
}
