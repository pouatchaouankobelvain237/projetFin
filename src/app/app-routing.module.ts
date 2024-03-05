import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EcoleListComponent } from './ecole-list/ecole-list.component';
import { SingleEcoleComponent } from './single-ecole/single-ecole.component';
import { EnregistrementEcoleComponent } from './enregistrement-ecole/enregistrement-ecole.component';
import { EnregistrementEcole1Component } from './enregistrement-ecole1/enregistrement-ecole1.component';
import { FormulaireCommentaireComponent } from './formulaire-commentaire/formulaire-commentaire.component';

const routes: Routes = [
{path:'Log in', component:ConnexionComponent},
{path:'Sign up', component:InscriptionComponent},
{path:'List', component:EcoleListComponent},
{path:'ecoles/:id', component:SingleEcoleComponent},
{path:'enregistrement ecole', component:EnregistrementEcoleComponent},
{path:'enregistrement ecole suite', component:EnregistrementEcole1Component},
{path:'commentaire', component:FormulaireCommentaireComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
