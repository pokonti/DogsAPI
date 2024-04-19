import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-breeds',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './breeds.component.html',
  styleUrl: './breeds.component.css'
})
export class BreedsComponent implements OnInit{
  breeds: string[] = [];
  loaded!: boolean;
  images: any = {}; //any is not what i need
  dogImagesMap: { [key: string]: string } = {};

  constructor(private breedsService: BreedsService) {}
  ngOnInit(): void {
    this.loaded = false;
    this.breedsService.getDogsList().subscribe((response) => {
    this.breeds = response.message;
    this.getBreedsImages();
    this.loaded = true;
    });
  }
  
  getBreedsImages() {
    this.breeds.forEach((breed) => this.getRandomImg(breed))
  }

  getRandomImg(breed: string){
    
    this.breedsService.getRandomImg(breed).subscribe((response) => {
      this.images[breed] = response.message[0];
      
    },
    error => {
      console.error('Error fetching random dog images:', error);
    })
  }

  // getRandomImages(breed: string){
  //   this.breedsService.getRandomImageDog(breed).subscribe(imagesMap => {
  //     this.dogImagesMap = imagesMap;
  //   }, 
  //   error => {
  //     console.error('Error fetching random dog images:', error);
  //   });
  // }

}
