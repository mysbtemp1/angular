import { Component, OnInit } from '@angular/core';

import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(private service: ServerService) { }

  ngOnInit(): void { }

  submit() {
    this.service.login(this.username, this.password);
  }

}
