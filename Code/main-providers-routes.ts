import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit, Injectable} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Injectable()
export class TaskService {
    tasks = ["First task", "Second Task", "Third Task"];
}


@Component({
    selector: 'other',
    template: `
    <h3>Other Component</h3>
    `
})
export class OtherComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}


@Component({
    selector: 'tasks',
    providers: [TaskService],
    template: `
    <h4>This is the Tasks Component</h4>
    <ul>
        <li *ngFor="let task of taskService.tasks">
            {{ task }}
        </li>
    </ul>
    `
})
export class TasksComponent implements OnInit {

    constructor(public taskService: TaskService) { }

    ngOnInit() { }
}





@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, TasksComponent],
    providers: [ROUTER_PROVIDERS],
    template: `
    <h1>Hello World</h1>
    <h4>Other stuff here... Other stuff here... Other stuff here... Other stuff here... </h4>
    <a href="" [routerLink]="['Tasks']">Tasks</a>
    <a href="" [routerLink]="['Other']">Other</a>
    <a href="" [routerLink]="['Something']">Other</a>
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path:'/tasks', name: 'Tasks', component: TasksComponent, useAsDefault:true },
    {path:'/other', name: 'Other', component: OtherComponent },
    {path:'/something', name: 'Something', component: OtherComponent }
])
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

bootstrap(AppComponent)