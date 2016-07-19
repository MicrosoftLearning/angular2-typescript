import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'tasks',
    template: `
    <h4>This is the Tasks Component</h4>
    `
})
export class TasksComponent implements OnInit {
    constructor() { }

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