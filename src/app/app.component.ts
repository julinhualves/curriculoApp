import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  experiencia = [

  	{
  		empresa: "Empresa: Ensinar Digital",
  	 	tempo: "Período: Ago de 2015 - o momento",
  	 	titulo: "Cargo: Co-fundador",
  		descricao: "<p>- Concepção e criação de jogos e atividades educacionais, instalação e personalização de Ambientes Virtuais de Aprendizagem, Criação de sites educacionais com design responsivo. </p><p>- Desenvolvimento de engine para criação livros animados, compatível com tablets, celulares e WEB.</p> <p>- Criação de conteúdo educacional em Realidade Aumentada e Realidade Virtual</p> <p>- Desenvolvimento de app’s proprietários Android e IOS.</p> <p>- Analise e desenvolvimento de softwares personalizados.</p>"
  	},

  	{
  		empresa: "Positivo", 
  		titulo: "Desenvolvedor",
		tempo: "Nov de 2012 - Ago de 2015",
		descricao: "<p>- Criação e adaptação de conteúdos educacionais para tablets.</p> <p>- Criação de modelo de conversão de conteúdos interativos e com animações em flash para HTML5.</p> <p>- Desenvolvimento de conteúdos e menus para portal educacional.</p> <p>- Suporte tecnológico multimídia. Edição/preparação de vídeos e sons para WEB.</p>"
  	},
  	{
  		empresa: "AHOM",
  		titulo: "Desenvolvedor",
  		tempo: "Mar de 2012 - Ago de 2012",
		descricao: "<p>- Prototipação, concepção e criação de jogos educacionais.</p>"
  	},
  	{
  		empresa: "Aymará Edições e Tecnologia",
  		titulo: "Desenvolvedor Pleno",
		tempo:  "Abr de 2009 - Nov de 2011",
		descricao: "<p>- Criação de jogos e modelos de atividades educacionais.</p> <p>- Criação de modelo de curso integrado com LMS ‘s proprietários.</p> <p>- Prototipação em RA</p><p>- Coordenação de Desenvolvedores júniors.</p>"
  
  	},
  	{
  		empresa: "Learnway",
  		titulo: "Programador" ,
		tempo:  "Jun de 2008 - Mar de 2009",
		descricao: "<p>- Desenvolvimento de treinamentos, simuladores e avaliações, para treinamento empresarial. Desenvolvimento para plataformas SCORM e Proprietárias</p>"

  	},
  	{
  		empresa: "Bom Jesus",
  		titulo: "Programador Junior",
  		tempo: "Fev de 2006 - Mai de 2008",
  		descricao:  "<p>- Desenvolvimento de atividades educacionais e avaliações para o portal educacional.</p>"
  	}
  ]

  cursos = [
    {
      icone: "laptop",
      instituicao: 'UDACITY',
      tipo: "On-line",
      curso: "UX Design for Mobile Developers",
      link: "",
      tempo: "Em andamento"
    },
    
    {
      icone: "laptop",
      instituicao: 'UDEMY',
      tipo: "On-line",
      curso: "React 16 - The Complete Guide (incl. React Router 4 & Redux)",
      link: "",
      tempo: "Em andamento"
    },
    {
      icone: "laptop",
      instituicao: 'UDEMY',
      tipo: "On-line",
      curso: "UX & Design Thinking: Experiência do Usuário nos negócios",
      link: "",
      tempo: "em andamento"
    },
    {
      icone: "laptop",
      instituicao: 'UDEMY',
      tipo: "On-line",
      curso: "Diseño UX + Historia del Arte",
      link: "https://www.udemy.com/certificate/UC-Q6T7P06I/",
      tempo: "2018"
    },
    {
      icone: "laptop",
      instituicao: 'UDEMY',
      tipo: "On-line",
      curso: "Ionic 2/ Ionic 3 - Build iOS & Android Apps with Angular",
      link: "",
      tempo: "2017"
    },
    {
      icone: "laptop",
      instituicao: 'UDEMY',
      tipo: "On-line",
      curso: "Angular 5 (formerly Angular 2) - The Complete Guide",
      link: "",
      tempo: "2017"
    },
    {
      icone: "laptop",
      instituicao: 'EDX',
      tipo: "MOOC",
      curso: "edX Verified Certificate for Les fondements de la stratégie d’entreprise",
      link: "https://courses.edx.org/certificates/user/8357488/course/course-v1:LouvainX+Louv10x+3T2015",
      tempo: "2015"
    },
    {
      icone: "laptop",
      instituicao: 'EDX',
      tipo: "MOOC",
      curso: "edX Verified Certificate for Découvrir le marketing",
      link: "https://courses.edx.org/certificates/user/8357488/course/course-v1:LouvainX+Louv11x+4T2015",
      tempo: "2015"
    },
    {
      icone: "university",
      instituicao: 'Pontifícia Universidade Católica do Paraná',
      tipo: "Superior",
      curso: "Informática no Gerenciamento de Pequenas e Médias Empresas",
      link: "",
      tempo: "2005 - 2006"
    },
    {
      icone: "university",
      instituicao: 'Pontifícia Universidade Católica do Paraná',
      tipo: "Pós Graduação",
      curso: "Desenvolvimento de Jogos Digitais",
      link: "",
      tempo: "2010 - 2011"
    },
  ]

  clicouLinkedin(){
      window.open('https://www.linkedin.com/in/julioalves87/');
  }
  clicouEd(){
      window.open('www.ensinardigital.com.br');
  }
}

/*
STARTUPS EMPREENDEDORISMO NOVAS TECNOLOGIAS CRESCIMENTO PROFISSIONAL CARREIRA ACELERADA OPORTUNIDADE DE APRENDIZADO TRABALHOS REMOTOS
*/

