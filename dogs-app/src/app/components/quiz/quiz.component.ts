import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent  implements OnInit{
  randomDogImage: string = '';
  options: string[] = [];
  correctOption: string = '';
  selectedOption: string = '';
  showResult: boolean = false;

  constructor(private service: BreedsService) { }

  ngOnInit(): void {
    this.loadQuiz();
  }

  loadQuiz(): void {
    this.service.getRandomDogImages(4).subscribe(images => {
      this.randomDogImage = images[0];
      this.correctOption = this.extractBreedFromImageUrl(this.randomDogImage);
      this.options = images.map(image => this.extractBreedFromImageUrl(image));
      this.options = this.shuffleArray(this.options);

      // console.log(this.randomDogImage)
      // console.log(this.options)
      // console.log(this.correctOption)
    });
  }

  extractBreedFromImageUrl(imageUrl: string): string {
    const parts = imageUrl.split('/');
    return parts[parts.length - 2];
  }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  checkAnswer(selectedOption: string): void {
    this.selectedOption = selectedOption;
    if(this.selectedOption == this.correctOption){
      const duration = 3000; // in milliseconds
      confetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.6 },
      });
      // Clear confetti after a certain duration
      setTimeout(() => confetti.reset(), duration);
    }
    this.showResult = true;
  }

  resetQuiz(): void {
    this.selectedOption = '';
    this.showResult = false;
    this.loadQuiz();
  }

}
