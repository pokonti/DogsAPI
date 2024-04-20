import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, Photo } from '../interface/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  private BASE_URL: string = 'https://dog.ceo/api';

  constructor(private http: HttpClient) { }

  getDogsAllList(){
    return this.http.get<ApiResponse>(`${this.BASE_URL}/breeds/list/all`)
  }
  getDogsList(){
    return this.http.get<ApiResponse>(`${this.BASE_URL}/breeds/list`)
  }

  getRandomImg(breed: string){
    return this.http.get<Photo>(`${this.BASE_URL}/breed/${breed}/images/random`)
  }

  searchDog(query: string){
    return this.http.get<ApiResponse>(`${this.BASE_URL}/list`)
  }

  getSubbreed(breed: string){
    return this.http.get<ApiResponse>(`${this.BASE_URL}/breed/${breed}/list`)
    .pipe(
      map(response => response.message)
    );
  }

  getSingleRandomSubbreed(breed:string, subbreed: string){
    return this.http.get<Photo>(`${this.BASE_URL}/breed/${breed}/${subbreed}/images/random`);
  }

  getMultipleRandomSubbreedImages(breed:string, subbreed: string){
    return this.http.get<ApiResponse>(`${this.BASE_URL}/breed/${breed}/${subbreed}/images/random/15`)
  }

  getMultipleRandomImages(breed:string){
    return this.http.get<ApiResponse>(`${this.BASE_URL}/breed/${breed}/images/random/15`);
  }
}
