import { Component } from "@angular/core";
import { reduce } from "rxjs";

@Component({        //Decorator 
    selector: 'app-server',         // tag
    // selector: '.app-server',     // class
    // selector: '[app-server]',    // attribute
    templateUrl: './server.component.html',
    styles:  [`
        
        .online {
            color : white;
        },
        .offline {
            color : white;
        },
        p {
            color: dodgerblue;
        }

    `]
})            
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'online';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline' 
    }
  
    getServerStatus() {
      return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
  }
  