import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {

  @Input() comps:string = "";
  @Input() titulo:string = "";
  @Input() subTitulo:string = "";

  lista = [];

  competencias = [
   { 
    titulo: "Front-end/Full-stack Web Developer", 
     tempo: "12 anos",
     stars: "5"
   },
   { 
    titulo: "Mobile Developer",
     tempo: "3 anos",
     stars: "3"
   },
   { 
    titulo: "Android Developer",
     tempo: "1 ano",
     stars: "3"
   },
   { 
    titulo: "Game Develompent",
     tempo: "5 anos",
     stars: "4"
   },
   { 
    titulo: "POO",
     tempo: "7 anos",
     stars: "5"
   },
   { 
    titulo: "Design Responsivo",
     tempo: "4 anos",
     stars: "4"
   },
   { 
    titulo: "Design Thinking",
     tempo: "2 anos",
     stars: "3"
   },
   { 
    titulo: "UX",
     tempo: "3 anos",
     stars: "4"
   }
  ]
  

  skills = [
    { 
      titulo: "Javascript/Next Jen/Typescript",
     tempo:  "6 anos",
     stars: "5"
   },
    { 
   titulo: "HTML5/CSS3",
     tempo:  "6 anos",
     stars: "4"
   },
    { 
     titulo: "Jquery/bootstrap",
     tempo:  "4 anos",
     stars: "4"
   },
   { titulo: "Unity 3D",
     tempo:  "5 anos",
     stars: "4"
   },
   { titulo: "Angular",
     tempo: "3 anos",
     stars: "4"
   },
   { titulo: "React",
     tempo:  "1 ano",
     stars: "2"
   },
   { titulo: "Ionic",
     tempo:  "2 anos",
     stars: "4"
   },
   { titulo: "Android Nativo",
     tempo:  "1 ano",
     stars: "4"
   },
   { titulo: "Actionscript/flash",
     tempo:  "6 anos",
     stars: "5"
   }
  ]


  ingles = [

  	{ 
  	  titulo: "Leitura",
      tempo:  "",
      stars: "5"
    },
    { 
  	  titulo: "Escrita",
      tempo:  "",
      stars: "4"
    },
    { 
  	  titulo: "Conversação",
      tempo:  "",
      stars: "3"
    }
  ]

  espanhol = [

  	{ 
  	  titulo: "Leitura",
      tempo:  "",
      stars: "5"
    },
    { 
  	  titulo: "Escrita",
      tempo:  "",
      stars: "3"
    },
    { 
  	  titulo: "Conversação",
      tempo:  "",
      stars: "2"
    }
  ]

  frances = [

  	{ 
  	  titulo: "Leitura",
      tempo:  "",
      stars: "4"
    },
    { 
  	  titulo: "Escrita",
      tempo:  "",
      stars: "2"
    },
    { 
  	  titulo: "Conversação",
      tempo:  "",
      stars: "1"
    }
  ]


  constructor() { }

  ngOnInit() {
  	

  	if(this.comps == "competencias"){
  		this.lista = this.competencias;
  	}else if(this.comps == "skills"){
  		this.lista = this.skills;
  	}else if(this.comps == "ingles"){
  		this.lista = this.ingles;
  	}else if(this.comps == "espanhol"){
  		this.lista = this.espanhol;
  	}else if(this.comps == "frances"){
  		this.lista = this.frances;
  	}
  }
}










