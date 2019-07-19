import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from 'src/app/models/event.interface';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();

  getStartTimeClass() {
    const expression = this.event && this.event.time === '8:00 am';
    return { green: expression, bold: expression };
  }
}


