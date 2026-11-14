import { Component } from '@angular/core';

@Component({
 selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    title = 'TaskFlow';

  canDelete = false;

  rename() {
    this.title = 'Mes tâches';
    this.canDelete = true;
  }
  delete()  {
    this.title = "";
  }

}


