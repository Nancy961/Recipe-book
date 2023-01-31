import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  tStamp = '';

  servers = ['Testserver'];

  constructor(public datepipe: DatePipe) { // Property binding

    this.tStamp = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
  
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; // explicit casting
  }

  // ASSIGNMENT 2

  userName = '';

  resetUser() {
    this.userName = '';
  }

  // ASSIGNMENT 3

  allClicks = [];

  displayPara = false;
  showinBlue = false;

  buttonClicked() {

    this.displayPara = !this.displayPara;

    // this.allClicks.push(this.allClicks.length + 1);    // sol 1
    // this.allClicks.push(this.tStamp);                  // sol 2

    this.allClicks.push(new Date);                      // sol 2 : No imports needed
    
    console.log(this.allClicks.length);
  }

  getColor(x) {
    return x > 4 ? 'blue':'rgb(240, 249, 240)';
  }
}
