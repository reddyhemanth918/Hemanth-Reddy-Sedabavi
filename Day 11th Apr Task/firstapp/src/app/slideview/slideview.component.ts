import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slideview',
  templateUrl: './slideview.component.html',
  styleUrls: ['./slideview.component.css']
})
export class SlideviewComponent implements OnInit, OnDestroy {
  @ViewChild('slideshow') slideshow!: ElementRef<HTMLImageElement>;

  images = ["http://localhost/car.jpg", "http://localhost/shr.jpg", "http://localhost/dollar.jpg"];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.slideshow.nativeElement.src = this.images[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
