import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dimensiones',
  templateUrl: './dimensiones.component.html',
  styleUrls: ['./dimensiones.component.css']
})
export class DimensionesComponent implements OnInit {

  porcentaje: any;
  planeacion: boolean = true;
  operacion: boolean = true;
  balance: boolean = true;



  constructor(private router: Router) { }

  ngOnInit(): void {
    this.porcentaje = sessionStorage.getItem('PORCENTAJE');
    if (this.porcentaje == 25){
      this.planeacion = false;
    }else if (this.porcentaje == 50){
      this.planeacion = false;
      this.operacion = false;
    }else if (this.porcentaje == 75){
      this.planeacion = false;
      this.operacion = false;
      this.balance = false;
    }else if (this.porcentaje == 100){
      this.planeacion = false;
      this.operacion = false;
      this.balance = false;
    }

  }

  buenGobierno(dimension: string){
    localStorage.setItem('DIMENSION', dimension );
    this.router.navigate(['informativo'])
  }

  planeacionEstrategica(dimension: string){
    localStorage.setItem('DIMENSION', dimension );
    this.router.navigate(['informativo'])
  }

  operacionDimension(dimension: string){
    localStorage.setItem('DIMENSION', dimension );
    this.router.navigate(['informativo'])
  }

  salir(){
    this.router.navigate(['inicio'])
  }

}
