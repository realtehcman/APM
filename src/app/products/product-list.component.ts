import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = "Max' Product List ";
  imgWidth = 50;
  imgMargin = 5;
  errorMessage = '';
  private _searchKeyWord: string = '';

  showImg = false;

  products: IProduct[] = [];

  searchedProducts: IProduct[] = [];

  constructor(private productService: ProductService) {} //implicetly
  //creating a new service

  toggleImg(): void {
    this.showImg = !this.showImg;
  }

  get searchKeyWord(): string {
    return this._searchKeyWord;
  }

  set searchKeyWord(value: string) {
    this._searchKeyWord = value;
    console.log('Max set a new keyword: ' + value);
    this.searchedProducts = this.performSearch(value);
  }

  performSearch(searchedBy: string): IProduct[] {
    searchedBy = searchedBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().includes(searchedBy);
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.searchedProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
    this.searchedProducts = this.products;
    // throw new Error("Method not implemented.");
    console.log('Max implemented OnInit');
  }

  ngOnDestroy(): void {}
}
