import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { ToastrService } from 'src/services/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/models/event.model';

@Component({
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private route: ActivatedRoute, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleClick(data) {
    this.toastrService.error(data, 'Error');
  }
}
