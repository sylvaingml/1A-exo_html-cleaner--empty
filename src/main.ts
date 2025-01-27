import { Component, ElementRef, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'main.html',
})
export class App {
  @ViewChild('userInput') inputFld!: ElementRef<HTMLTextAreaElement>;

  protected modernHTML: string = '';

  protected doReset(): void {
    this.modernHTML = '';
  }

  protected doCleanup(): void {
    const userInput: string = this.inputFld.nativeElement.value || '';
    this.modernHTML = this.transformHTML(userInput);
  }

  private transformHTML(input: string): string {
    // TODO: transform input as requested
    let output = input.toUpperCase();

    return output;
  }
}

bootstrapApplication(App);
