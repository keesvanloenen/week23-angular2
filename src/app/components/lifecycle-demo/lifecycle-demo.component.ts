import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.scss']
})
export class LifecycleDemoComponent {
  toonLifecycle = true;
  parentMessage = 'Hallo vanuit parent';
  childMessage = '';

  onMessageSent(childMessage: string) {
    this.childMessage = childMessage;
  }
}
