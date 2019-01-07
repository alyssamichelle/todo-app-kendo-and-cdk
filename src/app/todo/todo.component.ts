import { trigger, transition, animate, style, keyframes, useAnimation, query, animateChild, group, stagger } from '@angular/animations';
import { slideInAnimation, slideOutAnimation } from '../animations';
import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
  trigger('todoItem', [
    transition(':enter', [
     useAnimation(slideInAnimation)
    ]),
    transition(':leave', [
      style({ backgroundColor: '#df3920' }),
      useAnimation(slideOutAnimation)
    ]),
  ]),

  trigger('todosWrapper', [
    transition(':enter', [
    group([
      query('h1', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      query('input', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      query('@todoItem',
        stagger(200, animateChild())
      )
    ])

    ])
  ]),
   
  ]
})

export class TodoComponent {
  todos: string[] = [
    'Finish super hard puzzle',
    'Pack for Denver',
    'Write animations talk'
  ];

  addTodo(input: HTMLInputElement) {
    if (this.todos.indexOf(input.value) === -1) {
      this.todos = [input.value, ...this.todos];
    }
    input.value = '';
  }

  removeTodo(todo, i) {
    if (i > -1) {
      this.todos.splice(i, 1);
    }
  }
}
