import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {


	@Input() empresa:string 
	@Input() titulo:string 
	@Input() tempo:string 
	@Input() descricao:string 

  constructor() { }

  ngOnInit() {
  }

}
