import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  providers: [MessageService],
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})



export class HelloComponent implements OnInit {

  message: string;

  constructor(private service: MessageService) { }

  ngOnInit() {
    this.message = this.service.getMessage();
  }

}
