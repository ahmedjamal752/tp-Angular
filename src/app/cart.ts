import { Injectable, computed, signal } from '@angular/core';
import { Produit } from './catalogues/catalogues';

@Injectable({ providedIn: 'root' })
export class PanierService {
  private readonly _items = signal<Produit[]>([]);

  items = this._items.asReadonly();
  total = computed(() => this._items().reduce((somme, p) => somme + p.prix, 0));

  ajouter(produit: Produit): void {
    this._items.update((liste) => [...liste, produit]);
  }

  vider(): void {
    this._items.set([]);
  }
}