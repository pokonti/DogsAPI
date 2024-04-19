import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  private BASE_URL: string = 'https://dog.ceo/api';

  constructor(private client: HttpClient) { }

  getDogsAllList(){
    return this.client.get<ApiResponse>(`${this.BASE_URL}/breeds/list/all`)
  }
  getDogsList(){
    return this.client.get<ApiResponse>(`${this.BASE_URL}/breeds/list`)
  }

  getRandomImg(breed: string){
    return this.client.get<any>(`${this.BASE_URL}/breeds/image/random/`+ breed);
  }

  // getRandomImageDog(breed: string) {
  //   return this.client.get<any>(`${this.BASE_URL}/image/random/`+ breed).pipe(
  //     map(response => {
  //       const imagesMap: { [key: string]: string } = {};
  //       for(const breed in response.message) {
  //         imagesMap[breed] = response.message[breed];
  //       }
  //       return imagesMap;
  //     })
  //   );
  // }

  searchDog(query: string){
    return this.client.get<ApiResponse>(`${this.BASE_URL}/list`)
  }

  getSubbreed(breed: string){
    return this.client.get<ApiResponse>(`${this.BASE_URL}/breed/${breed}/list`)
    .pipe(
      map(response => response.message)
    );
  }
}
