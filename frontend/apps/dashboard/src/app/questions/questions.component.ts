import { Component, OnInit } from '@angular/core';
import { Question } from '@workspace/core-data';
import { QuestionsService } from '@workspace/core-data';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  filteredQuestions: Question[] = [];
  selectedQuestion: Question;

  constructor(
    private questionService: QuestionsService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getQuestions();
    this.resetQuestion();
  }

  getQuestions() {
    this.questionService.all().subscribe((res) => {
      this.questions = res;
      this.filteredQuestions = res;
    });
  }

  createQuestion(question) {
    this.questionService.create(question).subscribe((_res) => {
      this.getQuestions();
      this.resetQuestion();
      this._snackBar.open('Question Created', null, { duration: 2500 });
    });
  }

  selectQuestion(question: Question) {
    this.selectedQuestion = question;
  }

  resetQuestion() {
    const emptyQuestion: Question = {
      id: null,
      description: '',
      options: [{ datas: '' }],
      correctOption: 1,
    };
    this.selectQuestion(emptyQuestion);
  }

  addOption() {
    this.selectedQuestion.options.push({ datas: '' });
  }

  searchQuestion(event) {
    const query = event.target.value.toLowerCase();
    this.filteredQuestions = this.questions.filter((q) =>
      q.description.toLowerCase().includes(query)
    );
  }
}
