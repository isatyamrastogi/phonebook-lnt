import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  @Output() profileLoaded: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    console.log('inside constructor');
   }

  ngOnInit(): void {
    console.log('inside ngOnInit');
  }
  sendDataHandler(): void {
    this.profileLoaded.emit('Satyam');
  }

}
