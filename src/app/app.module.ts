import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleEcoleComponent } from './single-ecole/single-ecole.component';
import { EcoleListComponent } from './ecole-list/ecole-list.component';
import { EcoleComponent } from './ecole/ecole.component';
import { EnregistrementEcoleComponent } from './enregistrement-ecole/enregistrement-ecole.component';
import { EnregistrementEcole1Component } from './enregistrement-ecole1/enregistrement-ecole1.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormulaireCommentaireComponent } from './formulaire-commentaire/formulaire-commentaire.component';
import { ComentaireComponent } from './comentaire/comentaire.component';
import { RechercheComponent } from './recherche/recherche.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    HomepageComponent,
    HeaderComponent,
    SingleEcoleComponent,
    EcoleListComponent,
    EcoleComponent,
    EnregistrementEcoleComponent,
    EnregistrementEcole1Component,
    GalleryComponent,
    FormulaireCommentaireComponent,
    ComentaireComponent,
    RechercheComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
 }
