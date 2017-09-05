import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-add-server',
    templateUrl: './add-server.component.html',
    styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    // newServerName = '';
    newServerContent = '';
    constructor() {}

    ngOnInit() {}
    onAddServer(serverNameInput: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: serverNameInput.value,
            serverContent: this.newServerContent
        })
    }

    onAddBlueprint(serverNameInput: HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName: serverNameInput.value,
            serverContent: this.newServerContent
        })
    }

}
