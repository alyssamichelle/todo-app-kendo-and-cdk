import { animate, keyframes, style, animation } from "@angular/animations";

// I've created this animations file to keep our reusable triggers in, 
// if you have a ton of animations, 
// you might want to create a folder and organize them by file


export let slideInAnimation = animation([
  animate('0.5s cubic-bezier(.88,-0.19,.26,1.27)', keyframes([
    style({
      height: 0,
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    style({
      height: '50px',
    }),
    style({
      opacity: 1,
      transform: 'translateX(0)'
    })
  ]))
])


export let slideOutAnimation = animation([
  animate('0.5s cubic-bezier(.88,-0.19,.26,1.27)', keyframes([
    style({
      height: '50px',
      opacity: 1,
      transform: 'translateX(0)'
    }),
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    style({
      height: 0
    }),
  ]))
]);