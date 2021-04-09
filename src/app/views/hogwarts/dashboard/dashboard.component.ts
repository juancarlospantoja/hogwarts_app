import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HogwartsService } from '../../../app-core/services/hogwarts-services/hogwarts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Componente para el modulo de activar libretas.
 */
@Component({
  selector: 'body',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class Dashboard{
  ye:number=0;
  public info_usuario;
  lista:string[]=["slytherin","gryffindor","ravenclaw", "hufflepuff"];
  Users:string[]=[];
  paisFormulario: FormGroup;
  
  constructor(
    private router: Router,
    public serviceCalificacionesEst: HogwartsService,
  ) {
    this.paisFormulario = new FormGroup({
      pais: new FormControl(null)
    });
  }

  /**
   * Función que permite iniciar
   */
  async ngOnInit() {
    this.ye = new Date().getFullYear();
  }

  async capturar() {
    this.Users = await this.serviceCalificacionesEst.getCharacter(this.paisFormulario.get('pais').value).toPromise();    
  } 

  characterAge(yearOfBirth) {
    this.ye = new Date().getFullYear();
    if(yearOfBirth){
      let age = this.ye-yearOfBirth
      return age;
    }    
  }  

}

