import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from 'src/services';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private element: HTMLElement;
  @Input() modalId: string;

  constructor(private ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.element = ref.nativeElement;
  }

  ngOnInit() {
    this.element.addEventListener('click', () => {
      this.$(`#${this.modalId}`).modal();
    });
  }
}
