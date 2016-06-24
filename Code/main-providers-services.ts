import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit, Injectable} from '@angular/core';

@Injectable()
export class TaskService {
    tasks = ["First task", "Second Task", "Third Task"];

    update(){
        
    }

}


@Component({
    selector: 'tasks',
    providers: [TaskService],
    template: `
    <h4>This is the Tasks Component</h4>
    {{ taskService.tasks | json }}
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