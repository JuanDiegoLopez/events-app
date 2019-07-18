import { Component, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { JQ_TOKEN } from 'src/services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalContainer', { static: false }) element: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $) {}

  closeModal() {
    if (this.closeOnBodyClick === 'true') {
      this.$(this.element.nativeElement).modal('hide');
    }
  }
}
