import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Usuario} from "../../models/Usuario";
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // @ts-ignore
  usuario: Usuario = new Usuario();
  ingresar: any;

  constructor(private router: Router) { }

  ngOnInit(): void {


  }

  Ingresar(){
    this.router.navigate(['dimensiones'])
    sessionStorage.setItem('PORCENTAJE','0')
  }

  activarBoton(usuario: any){
    if (this.usuario.nombreCompleto && this.usuario.nit
      && this.usuario.correo && this.usuario.codigo && this.usuario.cargo){
      return false;
    }else {
      return true;
    }

  }


}
