import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingcardService {

  constructor() { }

  visibleImages= [];
  
  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

}


const IMAGES= [
  {"id":1, "category":"forest", "caption":"View from a forest", "url":"assets/img/f1.jpg"},
  {"id":2, "category":"forest", "caption":"View from a forest", "url":"assets/img/f2.jpg"},
  {"id":3, "category":"Animal", "caption":"View from a Animal", "url":"assets/img/animal1.jpg"},
  {"id":4, "category":"Animal", "caption":"View from a Animal", "url":"assets/img/animal2.jpg"},
];