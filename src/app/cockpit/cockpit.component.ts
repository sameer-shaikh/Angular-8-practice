import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
}) 
export class CockpitComponent implements OnInit {
    @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
    //newServerName = '';
    //newServerContent = '';
    @ViewChild('serverContent', { static: true }) serverContent: ElementRef;
    constructor() { }

    ngOnInit() {
    }

    onAddServer(newServer: HTMLInputElement) {
        //console.log(this.serverContent.nativeElement.value);
        this.serverCreated.emit({
            serverName: newServer.value,
            serverContent: this.serverContent.nativeElement.value
        });
    }

    onAddBlueprint(newServer: HTMLInputElement) {
        this.blueprintCreated.emit({
            blueprintName: newServer.value,
            blueprintContent: this.serverContent.nativeElement.value
        });
    }

}
