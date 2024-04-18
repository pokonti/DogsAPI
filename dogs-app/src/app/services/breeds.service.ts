import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../api';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  private BASE_URL: string = 'https://dog.ceo/api/breeds';

  constructor(private client: HttpClient) { }

  getDogsList(){
    return this.client.get<ApiResponse>(`${this.BASE_URL}/list`)
  }

  getRandomImg(breed: string){
    return this.client.get<any>(`${this.BASE_URL}/image/random/`+ breed);
  }
}
