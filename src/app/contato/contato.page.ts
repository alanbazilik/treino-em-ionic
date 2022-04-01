import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
nome: any
telefone: any
email: any
messagem: any
mess: any = []
  constructor() { }

  ngOnInit() {
  }
reclama(){
  this.mess.push({nome:this.nome,telefone:this.telefone,email:this.email,messagem:this.messagem })
}
}
