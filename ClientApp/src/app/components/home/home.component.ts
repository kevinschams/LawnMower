import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    {
      src: 'assets/mower.jpg',
      alt: 'Image 1',
      title: 'Front Yard Mowing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    // Add more image objects as you get clients
  ];
}
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }