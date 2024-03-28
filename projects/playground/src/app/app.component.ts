import { Component } from '@angular/core';
import { NgxMediaCarouselComponent } from 'ngx-media-carousel';
import { NgxMediaCarouselItem } from '../../../ngx-media-carousel/src/lib/ngx-media-carousel.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxMediaCarouselComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <ngx-media-carousel [items]="items" />
  `,
  styles: [],
})
export class AppComponent {
  title = 'playground';

  items: NgxMediaCarouselItem[] = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/20240213/pexels-photo-20240213/free-photo-of-portrait-of-woman-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/17365903/pexels-photo-17365903/free-photo-of-sunlit-building-wall.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
}
