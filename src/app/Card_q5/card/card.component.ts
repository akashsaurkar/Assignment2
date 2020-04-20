import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  productName: string = "";
  discription: string = "";
  companyName: string = "";
 
  
 
  public title :string = "Product List";

  productList : any[] = [
    { id:"1", name: 'Samsung s8', discription: 'Samsung s8 price:  40000', company: 'Samsung' },
    { id:"2", name: 'Samsung s9', discription: 'Samsung s9 price:  62000', company: 'Samsung' },
    { id:"3", name: 'iPhone 8', discription: 'iPhone 8 price: 60000', company: 'Apple' },
    { id:"4", name: 'Pixel 2', discription: 'Pixel2 price :53000', company: 'Google' },
  ]; 

  productDetail :any;   

  
  constructor() {
   // this.productList = getProductList();        
    this.productName = this.productList[0].name;
    this.discription = this.productList[0].discription;
    this.companyName = this.productList[0].company;
   }
   ngOnInit() {
  }
   onClick(id) {
    this.productDetail = this.productList.slice(0).find(n=>n.id===id);
    if(this.productDetail)
    {
        this.productName = this.productDetail.name;
        this.discription = this.productDetail.discription;
        this.companyName = this.productDetail.company;
    }
  }

 
  
}
