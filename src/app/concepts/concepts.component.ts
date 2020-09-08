import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .greenText{
        color: green;
      }
    `
  ]
})
export class ConceptsComponent implements OnInit {
  // string interpolation related
  appName = 'Phone Book App!';
  exp = 20;
  car = false;

  // property binding related
  companyName = 'L & T Constructions';
  isLoggedIn = false;

  // two way binding related
  courseName = 'Angular';

  profileName: any;

  // *ngFor related
  skillsList: string[] = ['html', 'css', 'js'];

  constructor() { }

  ngOnInit(): void {
  }

  getExp(): number {
    return this.exp;
  }
  // prop binding related
  isAuth(): boolean{
    return !this.isLoggedIn;
  }
  // event binding related
  clickHandler(evt: MouseEvent): void{
    console.log(evt);
    alert('clicked');
    (evt.target as HTMLButtonElement).disabled = true;
    // its made diabled after click
  }
    profileLoadedHandler(evt): void{
      console.log(evt);
      this.profileName = evt;
  }
}
