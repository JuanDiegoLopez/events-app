import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from 'src/app/models/event.model';
import { EventService } from 'src/services';

@Component({
  templateUrl: './event-create.component.html',
  styles: [`
    .event-img {
      max-height: 100px;
    }
  `]
})

export class EventCreateComponent {
  isDirty: boolean = true;

  constructor(private router: Router, private eventService: EventService) {

  }

  saveEvent(formData: any) {
    this.eventService.saveEvent(formData);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}