import { AlertasService } from './../../service/alertas.service';
import { environment } from './../../../environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';
import { TemaService } from './../../service/tema.service';
import { Tema } from './../../model/Tema';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema: Tema = new Tema()
  idTema: number

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idTema = this.route.snapshot.params['id']
    this.findByIdTema(this.idTema)

  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  apagar(){
    this.temaService.deleteTema(this.idTema).subscribe(()=>{
      this.alertas.showAlertSuccess('Tema apagado com sucesso!')
      this.router.navigate(['/tema'])
    })
  }

}
