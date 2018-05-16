import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

	@Input() icone:string;
	@Input() instituicao:string;
	@Input() tipo:string;
	@Input() curso:string;
	@Input() tempo:string;
  @Input() link:string;


  constructor() { }

  ngOnInit() {
  }

  clicouLink(){
    window.open(this.link);
  }
}
