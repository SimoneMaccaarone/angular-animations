import { state, style } from '@angular/animations';
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
  ]
})
export class OpenCloseComponent {

}
