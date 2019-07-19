import { Component, OnInit, Inject } from '@angular/core';
import { TOASTR_TOKEN } from 'src/services/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/models/event.interface';
import { IToastr } from 'src/app/models/toastr.interface';

@Component({
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private route: ActivatedRoute, @Inject(TOASTR_TOKEN) private toastr: IToastr) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleClick(data) {
    this.toastr.error(data, 'Error');
  }
}
