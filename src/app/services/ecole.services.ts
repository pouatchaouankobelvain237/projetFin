import { Injectable } from "@angular/core";
import { Ecole } from "../models/ecole.models";



@Injectable({
  providedIn:"root"
})
export class EcoleService {
  Ecoles: Ecole []=[
    {
      id:1,
      title : "Collège de l'Espérance de Yaoundé",
      description:"performance dans les résultals",
      datePoste:new Date(),
      like:160,
      imageUrl: "assets/image/images2.jpg",
      location: "mendong"
    },
    {
      id:2,
      title : "Lycée Général Leclerc de Yaoundé",
      description:"l'un des plus grand de yaoundé",
      datePoste:new Date(),
      like:160,
      imageUrl: "assets/image/images2.jpg",
      location: "mendong"
    },
    {
      id:3,
      title : "collège françois xavier mvogt",
      description:"plane sur le cameroun avec son énorme taux de réussite chaque annéee",
      datePoste:new Date(),
      like:160,
      imageUrl: "assets/image/Cap.png",
      location: "hhhhh"
    },
    {
      id:4,
      title : "Champs du Lys",
      description:"ecole de paola ester thancho le plus beau colllège du monde",
      datePoste:new Date(),
      like:160,
      imageUrl: "assets/image/img.jpg",
      location: "mendong"
    },
  ]
  getAllEcoles(): Ecole[] {
    return this.Ecoles;
  }
  getEcoleById(EcoleId: number): Ecole{
    const ecole = this.Ecoles.find(ecole =>  ecole.id=== EcoleId);
    if (!ecole){
      throw new Error('ecole not found');
    }
      else{
        return ecole;
      }

  }

  snapEcoleById(EcoleId: number, snapType:'aime' | 'like'): void{
    const ecole = this.getEcoleById(EcoleId);
    snapType=== 'aime'? ecole.like++ : ecole.like--;
  }
}
