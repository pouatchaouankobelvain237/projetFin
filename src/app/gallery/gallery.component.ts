import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images: string[] = [
    'assets/image/Cap.png',
    'assets/image/Cap.png',
    'assets/image/LOGO PROJET.png',
    // Ajoutez plus d'images selon vos besoins
  ];
  currentImageIndex: number = -1;

  showImage(index: number): void {
    this.currentImageIndex = index;
  }

}
