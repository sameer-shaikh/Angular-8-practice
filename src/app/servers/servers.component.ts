import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
}) 
export class ServersComponent implements OnInit {
  serverCreationStatus = 'No server Created';
  allowNewServer = false;
  serverName ='test value';
  serverCreated = false;
  servers = ['TestServer 01', 'Test 02 server'];
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server '+ this.serverName +' Created';
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    //console.log(event);
  }
 
}
