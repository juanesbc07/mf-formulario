import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  pr1 : string = "1. ¿La organización cuenta con políticas de buen gobierno? (Sí o No)";
  pr1_1 : string = "1.1. ¿Esas políticas se implementan y sus resultados se evalúan para el mejoramiento continuo de la organización? (Sí o No)";
  pr2 : string = "2. ¿La organización cuenta con código de ética? (Sí o No)";
  pr3 : string = "3. ¿La organización cuenta con manual de conflictos de interés? (Sí o No)";
  pr3_1 : string = "3.1. ¿El manual se aplica de manera objetiva ante eventuales casos de conflicto de interés? (Sí o No)";
  pr4 : string = "4. ¿En la organización son claras y están diferenciadas las responsabilidades y competencias de la gerencia, el Consejo de Administración o Junta Directiva y los asociados? (Sí o No)";
  pr5 : string = "5. ¿La organización realiza procesos de capacitación a sus asociados para su participación y postulación en los comités o espacios directivos? (Sí o No)";
  pr6 : string = "6. ¿La organización tiene establecida con claridad la postulación y rotación de los miembros de los comités o espacios directivos? (Sí o No)";
  pr7 : string = "7. ¿La organización cuenta con una herramienta para evaluar la gestión del Consejo de Administración o Junta Directiva? (Sí o No)";
  pr7_1 : string = "7.1. ¿los resultados de la evaluación son considerados para la postulación y rotación de los miembros de estos órganos? (Sí o No)";
  pr8 : string = "8. ¿La organización cuenta con plan estratégico? (Sí o No)";
  pr8_1 : string = "8.1.Indique cuál o cuáles de los siguientes aspectos contiene el plan estratégico de su organización:";
  pr9 : string = "9. ¿En la organización se realiza planeación estratégica de corto, mediano y largo plazo? (Sí o No) Nota: Corto plazo equivale a un año; mediano plazo entre uno y tres años; y largo plazo a más de tres años.";
  pr9_1 : string = "9.1. ¿La planeación estratégica, especialmente la de mediano y largo plazo, se proyecta en los estados financieros de la organización? (Sí o No)";
  pr10 : string = "10. ¿El Consejo de Administración o Junta Directiva aprueba un presupuesto anual para la organización? (Sí o No)";
  pr11 : string = "11. ¿El Consejo de Administración o Junta Directiva realiza seguimiento al plan estratégico o de acción de la organización? (Sí o No)";
  pr11_1 : string = "11.1. ¿Los resultados de ese seguimiento se utilizan para el mejoramiento continuo de los ejercicios de planeación estratégica? (Sí o No)";
  pr11_2 : string = "11.2. ¿Se calcula y analiza el margen de beneficio bruto para la toma de decisiones y la mejora continua? (Sí o No)";
  pr12 : string = "12. ¿El Consejo de Administración o Junta Directiva realiza revisión periódica de la efectividad de las políticas aprobadas para la organización? (Sí o No)";
  pr12_1 : string = "12.1. En caso afirmativo, ¿con qué periodicidad?";
  pr13 : string = "13. El Consejo de Administración o Junta Directiva realiza monitoreo al desempeño de áreas y/o oficinas de la organización? (Sí o No)";
  pr13_1 : string = "13.1. ¿Los resultados de ese monitoreo se utilizan para el mejoramiento continuo de los ejercicios de planeación estratégica? (Sí o No)";
  pr14 : string = "14. ¿La organización cuenta con manuales documentados de funciones y procedimientos? (Sí o No)";
  pr14_1 : string = "14.1. ¿Esos manuales están interiorizados por los distintos colaboradores y se cumplen con rigurosidad? (Sí o No)";
  pr15 : string = "15. ¿La organización cuenta con puntos de control para el desarrollo de los procesos, procedimientos y actividades? (Sí o No";
  pr15_1 : string = "15.1. ¿los resultados de los puntos de control de tienen en cuenta para el mejoramiento continuo del desarrollo de los procesos, procedimientos y actividades? (Sí o No)";
  pr16 : string = "16. ¿La organización cuenta con una estructura organizacional acorde con su tamaño y volumen de operaciones? (Sí o No)";
  pr16_1 : string = "16.1. ¿la estructura organizacional permite determinar o diferenciar con claridad las funciones entre oficinas (principal y las demás), así como la delimitación de responsabilidades y de autorizaciones generales y específicas? (Sí o No)";
  pr17 : string = "17. ¿La organización cuenta con un área de atención al asociado para obtener información y retroalimentación de sus servicios? (Sí o No)";
  pr18 : string = "18. ¿La organización lleva un control periódico del flujo de caja? (Sí o No)";
  pr19 : string = "19. ¿La organización cuenta con software para el desarrollo del core u objeto del negocio? (Sí o No)";
  pr19_1 : string = "19.1. ¿El software de la organización integra los módulos financiero y contable? (Sí o No)";
  pr20 : string = "20. ¿En la organización se implementan medidas de seguridad de la información (backup, protección de datos e información, espejo o respaldo de la información y asignación de responsables)? (Sí o No)";
  pr21 : string = "21. La organización cuenta con pólizas u otro tipo de garantías para respaldar sus servicios y/u operaciones? (Sí o No)";
  pr22: string = "22. ¿La organización presenta a sus asociados la gestión desarrollada y los resultados para el crecimiento de su base social? (Sí o No)";
  pr23 : string = "23. ¿En la organización se definen e implementan estrategias para promover el relevo generacional de la base social? (Sí o No)";
  pr24 : string = "24. ¿En la organización se definen e implementan estrategias para promover el relevo generacional en los órganos de dirección? (Sí o No)";
  pr25 : string = "25. ¿En la organización se gestionan beneficios para el asociado? (Sí o No)";
  pr25_1 : string = "25.1. ¿Indique respecto de qué valores y/o principios? ";
  pr26 : string = "26. ¿La organización monitorea el nivel en el que los asociados hacen uso de los beneficios, programas, proyectos y actividades sociales? (Sí o No)";
  pr26_1 : string = "26.1. ¿Los resultados del monitoreo se tienen en cuenta para el ajuste de las estrategias de la organización para la gestión de beneficios para el asociado? (Sí o No)";
  pr27 : string = "27. ¿Los órganos de administración miden el nivel de satisfacción de los asociados con los productos, servicios y beneficios que ofrece la organización? (Sí o No)";
  pr28 : string = "28. ¿La organización cuantifica los beneficios otorgados a los asociados en relación con los aportes sociales? (Sí o No)";
  pr28_1 : string = "28.1. ¿De qué manera se realiza esa cuantificación?";

  dimension: any;

  desactivarNo: any;

  preguntaActiva: any;
  preguntaDoble: any;
  preguntaTriple: any;
  preguntaSecundaria: any;
  preguntaAlterna: any;
  preguntaAlterna2: any;
  guardar: any;
  pregunta8_1:any;
  pregunta12_1:boolean = false;
  pregunta25_1:boolean = false;
  pregunta28_1:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dimension = localStorage.getItem('DIMENSION');

    //PRIMERA PREGUNTA BUEN GOBIERNO
    if (this.preguntaActiva == null){
      if (this.dimension == 'BUEN GOBIERNO'){
        this.preguntaActiva = this.pr1;
      }
    }
    if (this.dimension == 'PLANEACIÓN ESTRATEGICA'){
      this.preguntaActiva = this.pr8;
    }
    if (this.dimension == 'OPERACION'){
      this.preguntaActiva = this.pr14;
    }
    if(this.dimension == 'BALANCE SOCIAL'){
      this.preguntaActiva = this.pr22
    }

  }

  si(preguntaActiva: string){

    switch (preguntaActiva) {
      case this.pr1:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr1_1;
        this.preguntaDoble = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr1_1:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr2;
        console.log(this.preguntaActiva)
        break;
      case this.pr2:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr3;
        console.log(this.preguntaActiva)
        break;
      case this.pr3:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr3_1;
        this.preguntaDoble = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr3_1:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr4;
        console.log(this.preguntaActiva)
        break;
      case this.pr4:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr5;
        console.log(this.preguntaActiva)
        break;
      case this.pr5:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr6;
        console.log(this.preguntaActiva)
        break;
      case this.pr6:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr7;
        this.guardar = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr7:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr7_1;
        this.preguntaDoble = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr8:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr8_1;
        this.pregunta8_1 = true
        console.log(this.preguntaActiva)
        break;
      case this.pr8_1:
        this.preguntaDoble = false;
        this.pregunta8_1 = false;
        this.preguntaActiva = this.pr9;
        console.log(this.preguntaActiva)
        break;
      case this.pr9:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr9_1;
        this.preguntaDoble = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr9_1:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr10;
        console.log(this.preguntaActiva)
        break;
      case this.pr10:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr11;
        console.log(this.preguntaActiva)
        break;
      case this.pr11:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr11_1;
        this.preguntaDoble = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr11_1:
        this.preguntaAlterna2 = this.pr11_1
        this.preguntaActiva = this.pr11_2;
        this.preguntaDoble = true;
        this.preguntaTriple = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr11_2:
        this.preguntaDoble = false;
        this.preguntaTriple = false;
        this.preguntaActiva = this.pr12;
        console.log(this.preguntaActiva)
        break;
      case this.pr12:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr12_1;
        this.preguntaDoble = true;
        this.pregunta12_1 = true
        console.log(this.preguntaActiva)
        break;
      case this.pr12_1:
        this.preguntaDoble = false;
        this.pregunta12_1 = false;
        this.preguntaActiva = this.pr13;
        this.guardar = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr13:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr13_1;
        this.preguntaDoble = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr14:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr14_1;
        this.preguntaDoble = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr14_1:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr15;
        console.log(this.preguntaActiva)
        break;
      case this.pr15:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr15_1;
        this.preguntaDoble = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr15_1:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr16;
        console.log(this.preguntaActiva)
        break;
      case this.pr16:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr16_1;
        this.preguntaDoble = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr16_1:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr17;
        console.log(this.preguntaActiva)
        break;
      case this.pr17:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr18;
        console.log(this.preguntaActiva)
        break;
      case this.pr18:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr19;
        console.log(this.preguntaActiva)
        break;
      case this.pr19:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr19_1;
        this.preguntaDoble = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr19_1:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr20;
        console.log(this.preguntaActiva)
        break;
      case this.pr20:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr21;
        console.log(this.preguntaActiva)
        this.guardar = true;
        break;
      case this.pr22:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr23;
        console.log(this.preguntaActiva)
        break;
      case this.pr23:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr24;
        console.log(this.preguntaActiva)
        break;
      case this.pr24:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr25;
        console.log(this.preguntaActiva)
        break;
      case this.pr25:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr25_1;
        this.preguntaDoble = true;
        this.pregunta25_1 = true
        console.log(this.preguntaActiva)
        break;
      case this.pr25_1:
        this.preguntaDoble = false;
        this.pregunta25_1 = false;
        this.preguntaActiva = this.pr26;
        console.log(this.preguntaActiva)
        break;
      case this.pr26:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr26_1;
        this.preguntaDoble = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr26_1:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr27;
        console.log(this.preguntaActiva)
        break;
      case this.pr27:
        this.preguntaDoble = false;
        this.preguntaActiva = this.pr28;
        this.guardar = true;
        console.log(this.preguntaActiva)
        break;
      case this.pr28:
        this.preguntaAlterna = this.preguntaActiva;
        this.preguntaActiva = this.pr28_1;
        this.preguntaDoble = true;
        this.pregunta28_1 = true
        console.log(this.preguntaActiva)
        break;

      default:
        console.log(`Sorry, we are out of`);
    }

  }

  enviar(){
    if (this.dimension == 'BUEN GOBIERNO'){
      sessionStorage.setItem('PORCENTAJE','25')
    }else if(this.dimension == 'PLANEACIÓN ESTRATEGICA'){
      sessionStorage.setItem('PORCENTAJE','50')
    }else if(this.dimension == 'OPERACION'){
      sessionStorage.setItem('PORCENTAJE','75')
    }else if(this.dimension == 'BALANCE SOCIAL'){
      sessionStorage.setItem('PORCENTAJE','100')
    }
    this.router.navigate(['dimensiones'])
  }

}
