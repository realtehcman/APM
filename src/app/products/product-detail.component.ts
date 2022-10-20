import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { IProduct } from './IProduct';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})

export class ProductDetailComponent implements OnInit {
  title = "Max' product detail";
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.title += `: ${id}`;
  }

  onBack(): void {
      this.router.navigate(['/products']);
  }
}
