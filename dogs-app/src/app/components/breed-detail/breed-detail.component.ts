import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-breed-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breed-detail.component.html',
  styleUrl: './breed-detail.component.css'
})
export class BreedDetailComponent implements OnInit{
  subbreeds: string[] = [];
  
  constructor(private service: BreedsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getSubbreed();
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
      });
    });
  }

  getSubbreedImage(){
    
  }


}
