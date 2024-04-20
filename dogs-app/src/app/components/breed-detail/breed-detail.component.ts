import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-breed-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breed-detail.component.html',
  styleUrl: './breed-detail.component.css'
})
export class BreedDetailComponent implements OnInit{
  subbreeds: string[] = [];
  images: Map<string,string> = new Map();
  breedName: string = '';
  images2: string[] = [];

  constructor(private service: BreedsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getSubbreed();
    this.breedName = this.route.snapshot.params['breed'];
    this.getBreedImages(this.breedName);
    
  }

  getSubbreed(){
    this.route.paramMap.subscribe((params) => {
      const breed = String(params.get('breed'));
      this.service.getSubbreed(breed).pipe(
        catchError(error => {
          console.error('Error fetching subbreeds:', error);
          this.router.navigateByUrl('/not-found');
          return of([]);
        })
      ).subscribe((subbreeds) => {
        this.subbreeds = subbreeds;
        this.getSubbreedImg()
      });
      });
    }

  getSubbreedImg(){
    this.route.paramMap.subscribe((params) => {
      const breed = String(params.get('breed'));
      this.subbreeds.forEach((subbreed) => this.getSubbreedImage(breed, subbreed));
    });
  }

  getSubbreedImage(breed: string, subbreed: string){
    this.service.getSingleRandomSubbreed(breed, subbreed).subscribe(
      (response) => {
        this.images.set(subbreed, response.message);
      },
      (error: any) => console.error('Error fetching random dog images:', error),
      () => console.log('Done getting images'))}

  getBreedImages(breed: string){
    this.service.getMultipleRandomImages(breed).subscribe(
      (response) => {
        this.images2 = response.message;
      },
      (error: any) => console.error('Error fetching random dog images:', error),
      () => console.log('Done getting images'))}
    
}
