import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-app',
  templateUrl: './carrusel-app.component.html',
  styleUrls: ['./carrusel-app.component.scss'],
})
export class CarruselAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  option = { 
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true
  }

}
