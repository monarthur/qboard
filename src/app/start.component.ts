import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'start',
  templateUrl: './start.component.html'
})
export class StartComponent {
  title = 'start!';

  ngOnInit(): void {
    console.log('init');
  }
}