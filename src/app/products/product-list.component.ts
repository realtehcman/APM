import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  pageTitle = 'Max\' Product List ';
  imgWidth = 50;
  imgMargin = 5;
  private _searchKeyWord : string = '';

  showImg = false;



  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2021",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2020",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }
  ];
  
  searchedProducts: IProduct[] = this.products; 

  toggleImg() : void{
    this.showImg = !this.showImg;
  }
  
  get searchKeyWord(): string {
    return this._searchKeyWord;
  }

  set searchKeyWord(value : string){
    this._searchKeyWord = value;
    console.log('Max set a new keyword: ' + value)
    this.searchedProducts = this.performSearch(value);
  }

  performSearch(searchedBy : string) : IProduct[]{
    searchedBy = searchedBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => {
            return product.productName.toLocaleLowerCase().includes(searchedBy);

          }
    )
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    console.log("Max implemented OnInit")
  }
}