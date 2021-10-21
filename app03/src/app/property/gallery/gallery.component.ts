import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  foto = {
    src: 'assets/img/foto2.jpg',
    alt: 'partecipante alla gita in montagna',
    caption: 'viaggio avventura in montagna'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
