import { Component } from '@angular/core';
import { PostsCardsComponent } from '../posts-cards/posts-cards';

@Component({
  selector: 'app-blog',
  imports: [PostsCardsComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class BlogComponent {}