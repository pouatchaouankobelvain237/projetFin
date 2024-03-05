import { Component, Input, OnInit } from '@angular/core';
import { Ecole } from '../models/ecole.models';
import { EcoleService } from '../services/ecole.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.scss']
})
export class EcoleComponent implements OnInit {
  @Input() ecole!:Ecole;

  title!:string;
  description!:string;
  datePoste!:Date;
  like!:number;
  imageUrl!:string;
  buttext!: string;

  constructor(private ecoleService: EcoleService, private router: Router){}
  ngOnInit(): void {
    this.buttext= "aime";
  }
  OnaPPLike(){
    if(this.buttext === "aime"){
      this.ecoleService.snapEcoleById(this.ecole.id, 'aime');
      this.buttext= "like"
  }
  else{
    this.ecoleService.snapEcoleById(this.ecole.id, 'like');
    this.buttext= "aime"
  }

}
onViewEcole(){
  this.router.navigateByUrl(`ecoles/${this.ecole.id}`);
}
}
