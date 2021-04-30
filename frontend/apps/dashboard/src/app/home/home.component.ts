import { Component, OnInit } from '@angular/core';
import { UserService, User } from '@workspace/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any = [
    { icon: 'work', title: 'Projects', link: '/projects' },

    {
      icon: 'help',
      title: 'Create Questions',
      link: '/questions',
    },

    {
      icon: 'dashboard',
      title: 'Create Quiz',
      link: '/quiz',
    },

    {
      icon: 'question_answer',
      title: 'Attend Quiz',
      link: '/exam',
    },
  ];

  currUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUserDetails().subscribe((res) => {
      this.currUser = res;
    });
  }

  ngOnInit(): void {}

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
