import { Component, computed, input, signal } from '@angular/core';
import { NgxMediaCarouselItem } from './ngx-media-carousel.types';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ngx-media-carousel',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <button (click)="currentIndex.set(currentIndex() - 1)">Previous</button>

    <button (click)="currentIndex.set(currentIndex() + 1)">Next</button>

    <div class="Carousel">
      <img [src]="items()[currentIndex()].src" />
    </div>
  `,
  styleUrl: 'ngx-meda-carousel.component.scss',
})
export class NgxMediaCarouselComponent {
  currentIndex = signal(0);
  items = input.required<NgxMediaCarouselItem[]>();

  // /**
  //  * Culled items are a subset of the given media items.
  //  * To keep the page performant we shouldn't keep all the items
  //  * in the DOM at all times. We will only show 1 each side of the current item.
  //  */
  // culledItems = computed(() => {
  //   const _index = this.currentIndex();
  //   const _items = this.items();
  //
  //   // If no items are provided, always return an empty array.
  //   if (_items.length === 0) {
  //     return [];
  //   }
  //
  //   // If less than 3 items are
  //   if (_items.length < 3) {
  //     return _items;
  //   }
  //
  //   if (_items.length === 0) {
  //     return [_items[0]];
  //   }
  // });
}
