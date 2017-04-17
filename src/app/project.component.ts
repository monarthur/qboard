import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Project } from './classes/project';
import { ProjectService } from './project.service';

@Component({
  selector: 'project',
  templateUrl: './project.component.html'
})
export class ProjectComponent {
  title = 'project!';
  id: string;
  project: Project;

  constructor(private route: ActivatedRoute, private projectService:ProjectService) { }

  ngOnInit(): void {
    console.log('init project', this.id);
    this.route.params
        .switchMap((params: Params) => this.projectService.get(params['id']))
        .subscribe((project: Project) => this.project = project);
  }

  itemDragStart(e:any):any {
    console.log('dra på trissor!', e);
    e.dataTransfer.setData("issueId", e.target.id);
    setTimeout(function() {
    e.target.classList.add('is-dragged')}, 1);
  }
  itemDragEnd(e):any {
    console.log('end!', e);
    e.target.classList.remove('is-dragged');
    //document.getElementById('state2').classList.remove('is-dragged-over');
  }
  /*stateDrop(e):any {
    console.log('drop it like it\'s hot', e);
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    var issueId = e.dataTransfer.getData("issueId");
    e.target.appendChild(document.getElementById(issueId));
    return false;
  }*/
  stateDragEnter(e):any {
    console.log('enter', e);
    let target = e.target;
    if (target.nodeName != 'LI') {
        target = target.parentElement;
        if (target.nodeName != 'LI') {
            target = target.parentElement;
            if (target.nodeName != 'LI') {
                target = target.parentElement;
            }
        }
    }
    target.classList.add('is-dragged-over');
  }
  stateDragLeave(e):any {
    let target = e.target;
    if (target.nodeName != 'LI') {
        target = target.parentElement;
        if (target.nodeName != 'LI') {
            target = target.parentElement;
            if (target.nodeName != 'LI') {
                target = target.parentElement;
            }
        }
    }
    target.classList.remove('is-dragged-over');
  }
  stateDragOver(e):any {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
  }
/*document.getElementById('issue1').addEventListener('dragstart', issueDragStart);
document.getElementById('issue1').addEventListener('dragend', issueDragEnd);
document.getElementById('state2').addEventListener('drop', stateDrop);
document.getElementById('state2').addEventListener('dragover', stateDragOver);
document.getElementById('state2').addEventListener('dragenter', stateDragEnter);
document.getElementById('state2').addEventListener('dragleave', stateDragLeave);
*/}