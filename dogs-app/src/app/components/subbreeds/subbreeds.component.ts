import { Component, Input, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';
import { ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-subbreeds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subbreeds.component.html',
  styleUrl: './subbreeds.component.css'
})
export class SubbreedsComponent implements OnInit{
  images: string[] = [];
  breedName: string = String(this.route.snapshot.params['breed']);
  subbreedName: string = String(this.route.snapshot.params['subbreed']);;
 
  constructor(private service: BreedsService, private route: ActivatedRoute){
  
  }
  ngOnInit(): void {
    this.getSubbreedImages(this.breedName, this.subbreedName);
  }

  getSubbreedImages(breed: string, subbreed: string){
    this.service.getMultipleRandomSubbreedImages(breed, subbreed).subscribe(
      (response) => {
        this.images = response.message;
      },
      (error: any) => console.error('Error fetching random dog images:', error),
      () => console.log('Done getting images'))}


}
