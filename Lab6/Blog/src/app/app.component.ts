import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
  date1?: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  posts: Post[] = [{title: 'Вивчаю компоненти', text: 'Створюю проект "Блог"', id: 1, date1: new Date()},
    {title: 'Вивчаю директиви', text: 'Все ще створюю "Блог"', id: 2, date1: new Date()}]

  search: string = '';

  onSearchChange(event: Event) {
    this.search = (event.target as HTMLInputElement).value;
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
