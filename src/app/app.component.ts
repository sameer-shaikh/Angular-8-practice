import { Component } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverElements = [{type: 'server',
  //                   name: 'Testserver1',
  //                   content: 'test server1'
  //                 }];

  //     onServerAdded(serverData: {serverName: string, serverContent: string} ){
  //     this.serverElements.push({
  //       type: 'server',
  //       name: serverData.serverName,
  //       content: serverData.serverContent
  //     });
  //   }

  //   onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string} ){
  //     this.serverElements.push({
  //       type: 'blueprint',
  //       name: blueprintData.blueprintName,
  //       content: blueprintData.blueprintContent
  //     });
  //   }
  //Chapter 5 end

  //numbers = [1,2,3,4,5];
  oddNumber = [1,3,5];
  evenNumber = [2,4,6]
  onlyOdd = false; 
}
