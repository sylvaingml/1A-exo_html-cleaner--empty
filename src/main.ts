import { Component, ElementRef, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

/* TODO:
   Once transformation is implemented, could you propose an alternative
   implementation so we remove the "cleanup" button and transformation is
   applied live on the content of the text area.

   Expose possible options and explain how you ensure performances are
   not impacted.
 */
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
