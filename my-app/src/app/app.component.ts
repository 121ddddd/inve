import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
  })

  

export class AppComponent {  
  title = 'ng-carousel-demo';
  // images = [  
  //   { img: "../assets/6.jpeg" },  
  //   { img: "../assets/7.jpg" },  
  //   { img: "../assets/8.jpg" },  
   
  // ];  
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "../assets/6.jpeg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../assets/7.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../assets/8.jpg"}
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
 





