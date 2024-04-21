import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';


@Component({
    selector: 'app-breeds',
    standalone: true,
    templateUrl: './breeds.component.html',
    styleUrl: './breeds.component.css',
    imports: [CommonModule, RouterLink, RouterLinkActive, FontAwesomeModule, FormsModule, SearchComponent]
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
    )
  }

 

  // search in breeds actually
  searchText:string = '';

  onSearchTextChanged(searchValue: string){
    this.searchText = searchValue;
    // console.log(this.searchText);

  }
}
