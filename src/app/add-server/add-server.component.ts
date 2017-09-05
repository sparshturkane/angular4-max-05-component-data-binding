import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-add-server',
    templateUrl: './add-server.component.html',
    styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    newServerName = '';
    newServerContent = '';
    constructor() {}

    ngOnInit() {}
    onAddServer() {
        this.serverCreated.emit({
            serverName: this.newServerName,
            serverContent: this.newServerContent
        })
    }

    onAddBlueprint() {
        this.blueprintCreated.emit({
            serverName: this.newServerName,
            serverContent: this.newServerContent
        })
    }

}
