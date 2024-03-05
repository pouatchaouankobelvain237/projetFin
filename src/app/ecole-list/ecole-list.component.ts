import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ecole } from '../models/ecole.models';
import { EcoleService } from '../services/ecole.services';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ecole-list',
  templateUrl: './ecole-list.component.html',
  styleUrls: ['./ecole-list.component.scss']
})
export class EcoleListComponent {
  Ecoles! : Ecole[];
  constructor(private ecoleServices: EcoleService, private sanitizer: DomSanitizer){}
  ngOnInit():void{
    this.Ecoles= this.ecoleServices.getAllEcoles();
  }
  @ViewChild('searchInput', { static: true })
  searchInputRef!: ElementRef;
  @ViewChild('searchResult', { static: true })
  searchResultRef!: ElementRef;

  searchElement() {
    const inputElement = this.searchInputRef.nativeElement;
    const resultElement = this.searchResultRef.nativeElement;

    const searchValue = inputElement.value;

    // Effectuer la recherche dans le contenu de la page
    const foundElement = document.querySelector(`[data-search="${searchValue}"]`);

    if (foundElement) {
      // Afficher le résultat de la recherche
      resultElement.innerText = `Élément trouvé : ${foundElement.outerHTML}`;
    } else {
      // Aucun élément trouvé
      resultElement.innerText = 'Aucun élément correspondant trouvé.';
    }
  }


}
