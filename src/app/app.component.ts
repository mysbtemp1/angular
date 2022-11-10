import { Component } from '@angular/core';
import { ServerService } from './services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  constructor(private service: ServerService) { }

  ngOnInit(): void {
    this.service.checkLogin();
  }
}
