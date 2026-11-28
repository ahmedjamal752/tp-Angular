import { Component, inject, signal } from '@angular/core';
import { PanierService } from '../cart';
import { ProductCard } from '../product-card/product-card';

export interface Produit {
  id: number;
  nom: string;
  prix: number;
}

@Component({
  selector: 'app-catalogues',
  imports: [ProductCard],
  templateUrl: './catalogues.html',
  styleUrl: './catalogues.css',
})
export class Catalogues {
  panier = inject(PanierService);

  produits = signal<Produit[]>([
    { id: 1, nom: 'Casque audio', prix: 240 },
    { id: 2, nom: 'Souris sans fil', prix: 80 },
    { id: 3, nom: 'Tapis de souris', prix: 49 },
  ]);
}