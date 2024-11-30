import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage {
  constructor() {}

  onSubmit() {
    // Aquí puedes agregar lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  }
}
