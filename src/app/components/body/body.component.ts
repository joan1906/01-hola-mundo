import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  frase: any = {
    mensaje: "Un gran poder conlleva una gran responsabilidad",
    autor: "Ben Parker"
  };

  personajes: string[] = ["spiderman", "venom", "Dr octopus"];

  openfrase: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  HideShow() {
    this.openfrase = !this.openfrase
  };

}
