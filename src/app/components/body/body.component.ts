import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    constructor() {
        //Nada por ahora
    }

    mostrar:boolean = false;

    frase: any = {
        mensaje: 'Centro de soporte técnico',
        autor: 'Webcloster Apps'
    };

    elementos_list:object[] = [['link2','Alejandra'], ['link2','Yilmar'], ['link3','Yosef']];
}