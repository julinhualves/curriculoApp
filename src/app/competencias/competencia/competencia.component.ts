import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.css']
})
export class CompetenciaComponent implements OnInit {

  @Input() titulo: string;
  @Input() tempo: string;
  @Input() stars: string;


  estrelas = [];

  constructor() { }

  ngOnInit() {

  	for(let i =0; i<5; i++){
  		this.estrelas[i] = (i<Number(this.stars)) ? 1 : 0	;
  	}
  	console.log(this.estrelas)
  }
}
