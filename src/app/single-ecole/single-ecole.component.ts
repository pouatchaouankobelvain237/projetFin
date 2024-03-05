import { Component, OnInit } from '@angular/core';
import { Ecole } from '../models/ecole.models';
import { EcoleService } from '../services/ecole.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Utillisateur } from '../models/utilisateur.models';

@Component({
  selector: 'app-single-ecole',
  templateUrl: './single-ecole.component.html',
  styleUrls: ['./single-ecole.component.scss']
})
export class SingleEcoleComponent implements OnInit {
  ecole!:Ecole;
  title!:string;
  description!:string;
  datePoste!:Date;
  like!:number;
  imageUrl!:string;
  buttext!: string;

  utilisateur!:Utillisateur
  id!:number;
  nom!:string;
  dateP!:Date;

  constructor(private ecoleService: EcoleService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.buttext= "aime"
    const ecoleId  = + this.route.snapshot.params['id'];
    this.ecole = this.ecoleService.getEcoleById(ecoleId);
  }

  OnaPPLike(){
    if(this.buttext=== "aime"){
      this.ecoleService.snapEcoleById(this.ecole.id, 'aime');
      this.buttext="like"
    }
    else{
      this.ecoleService.snapEcoleById(this.ecole.id, 'like');
      this.buttext="aime"
    }
  }
  /*Comment(){
    this.router.navigateByUrl('commentaire');
  }*/




}
