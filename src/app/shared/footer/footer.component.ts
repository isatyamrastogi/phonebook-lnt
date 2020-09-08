import { Component, OnInit } from '@angular/core';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
     <hr>
     <app-menu>
       <li class="nav-item">
        <a class="nav-link" href="#">BackToTop</a>
      </li>
    </app-menu>
     <p class="greyText">Copyright 2020 !! Satyam</p>
    </div>
  `,
  styles: [
`
  .greyText{
    color : grey;
  }
`
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
