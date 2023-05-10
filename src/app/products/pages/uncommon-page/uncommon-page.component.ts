import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Carlos';
  public gender: 'male'|'female' = 'male';
  public invitationMap ={
    male: 'invitarlo',
    female: 'invitarla',
  }
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un  cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    '=other': 'tenemos # clientes esperando.',
  }


  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18Plural
  public clients: string[] =['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia']

  deleteClient():void{
    this.clients.shift();
  }

}
