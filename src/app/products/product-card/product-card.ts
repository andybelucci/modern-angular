import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButtonModule, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss'],
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly addButtonLabel = input('Add to Cart');
}
