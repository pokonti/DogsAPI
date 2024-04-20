import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  images: Map<string,string> = new Map();

  constructor(private breedsService: BreedsService) {}

  ngOnInit(): void {
    this.getDogsList();
  }

  getDogsList(){
    this.breedsService.getDogsList().subscribe((response) => {
      this.breeds = response.message;
      this.getBreedsImages();
    },
    (error:any) => console.log(error),
    () => console.log('Done getting a list'));
  }

  getBreedsImages() {
    this.loaded = false;
    this.breeds.forEach((breed) => this.getRandomImg(breed));
    this.loaded = true;
  }

  getRandomImg(breed: string){
    this.breedsService.getRandomImg(breed).subscribe(
      (response) => {
        this.images.set(breed, response.message);
      },
      (error: any) => console.error('Error fetching random dog images:', error),
      () => console.log('Done getting images')
      )}
}
