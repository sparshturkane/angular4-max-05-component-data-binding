import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-server',
  templateUrl: './display-server.component.html',
  styleUrls: ['./display-server.component.css']
})
export class DisplayServerComponent implements OnInit {
    @Input() element: {type: string, name: string, content: string};
    constructor() {}

    ngOnInit() {}

}
