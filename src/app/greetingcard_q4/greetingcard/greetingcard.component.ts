import { Component,  OnChanges, Input } from '@angular/core';
import { GreetingcardService } from '../greetingcard.service';

@Component({
  selector: 'app-greetingcard',
  templateUrl: './greetingcard.component.html',
  styleUrls: ['./greetingcard.component.css']
})
export class GreetingcardComponent implements OnChanges  {

  title: string = "Greeting Galary";
  
  visibleImages : any[] = [];
  @Input() filterBy?:string = 'all';  
  constructor(private imageService : GreetingcardService) {
    this.visibleImages = this.imageService.getImages();
   }
  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
    }  
 
}