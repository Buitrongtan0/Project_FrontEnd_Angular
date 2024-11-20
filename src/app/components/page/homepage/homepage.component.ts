import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  images = [
    { path: 'assets/img/banner2.jpeg' },
    { path: 'assets/img/banner3.jpeg' },
    { path: 'assets/img/banner4.jpeg' }
  ]
  ngOnInit(): void {
  }
  onClick(index: number) { 
    const clickedItem = this.images[index];
    this.images.splice(index, 1);
    this.images.unshift(clickedItem);
  }
}
