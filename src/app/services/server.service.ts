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

  constructor(private http: HttpClient) { }

  getImages(){
    return this.http.get(this.get_images_url);
  }

  saveImage(data: String){
    console.log('in post' + data);
    return this.http.post(this.post_image_url, data);
  }
}
