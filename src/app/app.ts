import { Component, inject, signal } from '@angular/core';
import { Catalogues } from './catalogues/catalogues';
import { PanierService } from './cart';

@Component({
  selector: 'app-root',
  imports: [Catalogues],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ma boutique');
  panier = inject(PanierService);
}