import { Component } from '@angular/core';
import BlogData from '../../../../public/assets/data/posts.json';
import { Category } from '../posts-cards/posts-cards'
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public categories: Category[] = BlogData.categories
}