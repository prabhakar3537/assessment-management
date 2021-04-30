import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '@workspace/core-data';

@Component({
  selector: 'app-questions-details',
  templateUrl: './questions-details.component.html',
  styleUrls: ['./questions-details.component.css'],
})
export class QuestionsDetailsComponent {
  @Output() saved = new EventEmitter();
  @Output() addedOption = new EventEmitter();
  @Output() canceled = new EventEmitter();
  @Input() currQuestion: Question;
}
