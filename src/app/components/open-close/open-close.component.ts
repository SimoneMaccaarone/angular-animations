import { animate, state, style, transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })
    ),
    state('closed', style({
      height: '100px',
      opacity: 0.8,
      backgroundColor: 'blue'
    })
    ),
    transition('open => closed',[
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ]
})
export class OpenCloseComponent {

}
