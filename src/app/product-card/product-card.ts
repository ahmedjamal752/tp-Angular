import { Component, input, output } from '@angular/core';
import { Produit } from '../catalogues/catalogues';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
})
export class ProductCard {
  produit = input.required<Produit>();
  ajouter = output<Produit>();
}