
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Interface Article
interface Article {
  id: number;
  title: string;
  bought: boolean;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})

export class Courses {

  // Liste des articles
  articles = signal<Article[]>([
    {
      id: 1,
      title: 'Pain',
      bought: false
    },
    {
      id: 2,
      title: 'Lait',
      bought: true
    },
    {
      id: 3,
      title: 'Pommes',
      bought: false
    }
  ]);

  // Variable pour récupérer le contenu de l'input
  newArticleTitle: string = '';

  // Ajouter un article
  addArticle() {

    if (this.newArticleTitle.trim() === '') {
      return;
    }

    const newArticle: Article = {
      id: Date.now(),
      title: this.newArticleTitle.trim(),
      bought: false
    };

    // Ajouter le nouvel article dans le signal
    this.articles.update(list => [...list, newArticle]);

    // vide inpuuuut
    this.newArticleTitle = '';
  }

  // Supprimer un article
  deleteArticle(id: number) {

    this.articles.update(list =>
      list.filter(article => article.id !== id)
    );

  }

  // Changer le statut acheté / non acheté
  toggleBought(id: number) {

    this.articles.update(list =>
      list.map(article => {

        if (article.id === id) {
          return {
            ...article,
            bought: !article.bought
          };
        }

        return article;
      })
    );

  }

}
