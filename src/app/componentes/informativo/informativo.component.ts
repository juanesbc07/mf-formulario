import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/Usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-informativo',
  templateUrl: './informativo.component.html',
  styleUrls: ['./informativo.component.css']
})
export class InformativoComponent implements OnInit {

  dimension: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dimension = localStorage.getItem('DIMENSION');
  }

  volver(){
    this.router.navigate(['dimensiones'])
  }

  siguiente(){
    this.router.navigate(['preguntas'])
  }

}
