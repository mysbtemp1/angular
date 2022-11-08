import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  private url = 'http://localhost:8000/api/images';

  constructor(private http: HttpClient) { }

  getImages(){
    return this.http.get(this.url);
  }
}
