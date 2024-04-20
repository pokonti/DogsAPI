
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  faSearch = faSearch;

  constructor(){}

  ngOnInit(): void {
   
  }

  searchValue:string = '';

  getDogs(){
    console.log(this.searchValue);
    this.searchValue = '';
  }
}
