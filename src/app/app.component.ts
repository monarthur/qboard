import { Component, OnInit } from '@angular/core';

import { ProjectService } from './project.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private projectService:ProjectService) {

  }

  ngOnInit(): void {
    console.log('init');
    this.projectService.get().subscribe(projects => {
      console.log(projects);
    })
  }
}
