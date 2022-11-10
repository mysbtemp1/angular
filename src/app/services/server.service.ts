import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private is_logged_in = true;

  private login_url1 = 'http://localhost:8000/api/login';
  private login_url2 = 'http://localhost:8000/api/logout';
  private login_url3 = 'http://localhost:8000/api/login_check';

  private url1 = 'http://localhost:8000/api/images';
  private url2 = 'http://localhost:8000/api/image/save';
  private url3 = 'http://localhost:8000/api/image/delete';

  images_array: Image[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  fetchImages() {
    this.http.get(this.url1)
    .subscribe(response => {

      this.images_array = [];

      for(const [key, data] of Object.entries(response)) {
        if (key == 'images') {
          for(const index in Object.entries(data)) {
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

  checkLogin() {
    this.http.get(this.login_url3)
    .subscribe(response => {
      if (response > 0) {
        this.is_logged_in = true;
      } else {
        this.is_logged_in = false;
      }
    });
  }


  login(username:string, password:string) {
    this.http.post(this.login_url1, { username: username, password: password })
    .subscribe(response => {
      if (response > 0) {
        this.is_logged_in = true;
        this.router.navigate(['/home']);
      } else {
        this.is_logged_in = false;
      }
    });
  }

  logout() {
    this.http.post(this.login_url2, {})
    .subscribe(response => {
      if (response > 0) {
        this.is_logged_in = true;
        this.router.navigate(['/login']);
      } else {
        this.is_logged_in = false;
      }
    });
  }
}
