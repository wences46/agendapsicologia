import { Component, OnInit } from '@angular/core';
import { ColectorService } from '../shared/colector.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styles: [
  ]
})
export class HomeLayoutComponent implements OnInit {

  constructor(
    private colectorService: ColectorService
  ) { }

  ngOnInit(): void {
  }

  get items(){
    return this.colectorService.items;
  }

}
