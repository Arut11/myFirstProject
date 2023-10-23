import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'first-steps',
  templateUrl: './first-steps.component.html',
  styleUrls: ['./first-steps.component.scss']
})
export class FirstStepsComponent {
  @ViewChild('inputElement') inputElementRef!: ElementRef<HTMLInputElement>;
  backgroundImage: string = 'url("minichel.jpg")';

  hideBackgroundImage() {
    this.backgroundImage = "none";
    this.inputElementRef.nativeElement.focus();
  }
}