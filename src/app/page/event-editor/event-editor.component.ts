import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event'
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event!: Event;

  constructor(
    private eService: EventService,
    private aRoute: ActivatedRoute ) {
      this.aRoute.params.subscribe(
        (p) => { 
          eService.get(p['id']).subscribe(
            e => {
              this.event = e;
            }
          );
        }
      )
     }

  ngOnInit(): void {
  }

  onUpdate(f : NgForm) {
    debugger
    this.eService.update(f.value);
  }
}
