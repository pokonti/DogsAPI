import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../services/breeds.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-breeds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breeds.component.html',
  styleUrl: './breeds.component.css'
})
export class BreedsComponent implements OnInit{
  breeds: string[] = [];
  loaded!: boolean;
  img: string[] = [];

  constructor(private breedsService: BreedsService) {}
  ngOnInit(): void {
    // this.loaded = false;
    this.breedsService.getDogsList().subscribe((response) => {
    this.breeds = response.message;
    // this.loaded = true;
    });
  }
  
  getRandomImg(breed: string){
    // this.loaded = false;
    this.breedsService.getRandomImg(breed).subscribe((response) => {
      this.img = response.message;
      // this.loaded = true;
    })
  }
}
