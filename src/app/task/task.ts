
import { Component, signal } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';

interface Task {
  id: number;
  title: string;
  dueDate: Date;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class task {

  tasks = signal<Task[]>([
    {
      id: 1,
      title: 'apprendre angular',
      dueDate: new Date('2026-11-15')
    },
    {
      id: 2,
      title: 'créer un composant',
      dueDate: new Date('2026-11-18')
    },
    {
      id: 3,
      title: 'faire un exercice',
      dueDate: new Date('2026-11-20')
    }
  ]);

  // Ajouter task
  addTask() {
    const newTask: Task = {
      id: Date.now(),
      title: 'nouvelle tâche',
      dueDate: new Date()
    };

    this.tasks.update(currentTasks => {
    currentTasks.push(newTask);
    return currentTasks;

  });
  }

  // 3. Suppr
  deleteTask(id: number) {
    this.tasks.update(currentTasks =>
      currentTasks.filter(task => task.id !== id)
    );
  }
  

}
