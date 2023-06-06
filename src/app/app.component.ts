import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        position: 'absolute',
        top: '500px',
        left: '500px',
        opacity:1
      })),
      state('hide', style({
        position: 'absolute',
        top: '-300px',
        left: '0',
        opacity:0

      })),
      transition('show => hide', [animate('1s')]),
      transition('hide => show', [animate('1s')]),
    ])
  ]
})
export class AppComponent {
  title = 'angular-animations';
  isShow = true;

  showHide(){
    this.isShow=!this.isShow;
  }


}
