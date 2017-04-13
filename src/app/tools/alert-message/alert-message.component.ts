import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert-message',
  templateUrl: './alert-message.component.html'
})
export class AlertMessageComponent{

    @Input() message:string;
    @Input() show:boolean;
    @Input() status:string; //success, warning, danger, infos
}