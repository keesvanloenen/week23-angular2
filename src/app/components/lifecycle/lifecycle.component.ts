import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
  intervalId = 0;

  @Input() message = '';
  @Output() messageSent = new EventEmitter<string>();

  onClick() {
    this.messageSent.emit(`Een bericht vanuit het child (sec: ${new Date().getSeconds()}).`);
  }

  constructor() {
    console.log('%c 👉 [LifeCycle] constructor', 'background: pink');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c 👉 [LifeCycle] ngOnChanges', 'background: lightblue', changes);
  }

  ngOnInit(): void {
    console.log('%c 👉 [LifeCycle] ngOnit', 'background: lightgreen');
    this.intervalId = window.setInterval(() => {
      console.log('👀 hallo vanuit interval!')
    }, 1000);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.intervalId);
    console.log('%c 👉 [LifeCycle] ngDestroy', 'background: red');
  }
}
