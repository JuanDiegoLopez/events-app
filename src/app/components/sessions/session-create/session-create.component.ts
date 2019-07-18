import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ISession } from 'src/app/models/event.model';
import { restrictedWords } from 'src/app/validators/restricted-words.validators';

@Component({
  selector: 'session-create',
  templateUrl: './session-create.component.html'
})

export class SessionCreateComponent implements OnInit {
  @Output() newSession = new EventEmitter();
  @Output() cancelNewSession = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValues: any) {
    let newSession: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: parseInt(formValues.duration),
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    };
    this.newSession.emit(newSession);
  }

  cancel() {
    this.cancelNewSession.emit();
  }
}