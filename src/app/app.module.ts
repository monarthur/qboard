import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from './start.component';
import { ProjectComponent } from './project.component';
import { ProjectService } from './project.service';

@NgModule({
  declarations: [
    AppComponent, StartComponent, ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
            path: 'project/:id',
            component: ProjectComponent
        },
        {
          path: '',
          component: StartComponent
        }
    ])
  ],
  providers: [ ProjectService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
