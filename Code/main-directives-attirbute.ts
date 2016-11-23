import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'tasks',
    template: `
    <h4 [class.red]="toggle">This is the Tasks Component</h4>
    
    <h4 [ngClass]="{ red: toggle, blue: !toogle }"]>This is the Tasks Component</h4>

    `,
    classes: [".red { color: red }", ".blue { color: blue }"]
})
export class TasksComponent implements OnInit {
    constructor() { }

    toggle : boolean = true;

    ngOnInit() { }
}





@Component({
    selector: 'my-app',
    directives: [TasksComponent],
    template: `
    <h1>Hello World</h1>
    <tasks></tasks>
    `
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

bootstrap(AppComponent)