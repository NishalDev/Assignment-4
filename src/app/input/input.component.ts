import { Component } from '@angular/core';
import { CharacterPipePipe } from '../character-pipe.pipe';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CharacterPipePipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  inputText: string = '';
  updateInputText(value: string) {
    this.inputText = value;
  }
}
