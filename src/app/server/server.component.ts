import { Component } from "@angular/core";

@Component({        //Decorator 
    selector: 'app-server',         // tag
    // selector: '.app-server',     // class
    // selector: '[app-server]',    // attribute
    templateUrl: './server.component.html',
    styles:  [`
        p {
            color: dodgerblue;
        }
    `]
})            
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
  
    getServerStatus() {
      return this.serverStatus;
    }
  }
  