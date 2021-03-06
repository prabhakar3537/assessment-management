import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from '@workspace/core-data';

@Component({
  selector: 'app-exams-results',
  templateUrl: './exams-results.component.html',
  styleUrls: ['./exams-results.component.css'],
})
export class ExamsResultsComponent implements OnInit {
  resultExists: Boolean = false;

  @Input() percentile: Number;
  val = 0;
  total = 0;
  res: any = {
    labels: ['correct', 'incorrect'],
    datasets: [
      {
        data: [1, 1],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  @Input() quiz: Quiz;

  constructor() {}

  ngOnInit(): void {}
  @Input() set result(value) {
    this.val = value.score;
    this.total = value.total;
    if (value.score >= 0) {
      this.resultExists = true;
      const changedData = {
        labels: ['correct', 'incorrect'],
        datasets: [
          {
            data: [value.score, value.total - value.score],
            backgroundColor: ['#79ff4d', '#ff4d4d'],
            hoverBackgroundColor: ['#79ff4d', '#ff4d4d'],
          },
        ],
      };

      this.res = Object.assign({}, changedData);
    } else {
      this.resultExists = false;
    }
  }
}
