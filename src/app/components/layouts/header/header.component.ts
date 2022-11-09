import { Component, OnInit } from '@angular/core';

import { ServerService } from 'src/app/services/server.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  company_name = 'Consult Anubhav';

  constructor(private service: ServerService) { 
    this.service.fetchImages();
  }

  ngOnInit(): void {
  }

}
