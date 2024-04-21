import { Component } from '@angular/core';
import { QuizComponent } from "../quiz/quiz.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [QuizComponent, RouterLink, RouterLinkActive, CommonModule]
})
export class HomeComponent {
    isQuiz: boolean = false;
    quizStart() {
        this.isQuiz = true;
    }

}
