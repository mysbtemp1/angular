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

  constructor(private http: HttpClient) { }

  getImages(){
    return this.http.get(this.get_images_url);
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
