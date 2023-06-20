import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Input() size: string = '100%';
  @Output() btnEmitter: EventEmitter<any> = new EventEmitter();

  public onClick(): void {
    this.btnEmitter.emit();
  }
}
