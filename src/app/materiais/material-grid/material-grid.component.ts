import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-grid',
  templateUrl: './material-grid.component.html',
  styleUrls: ['./material-grid.component.css']
})
export class MaterialGridComponent implements OnInit {

  @Input() materiais:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
