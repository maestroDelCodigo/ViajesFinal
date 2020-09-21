import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes-filter',
  templateUrl: './viajes-filter.component.html',
  styleUrls: ['./viajes-filter.component.scss']
})
export class ViajesFilterComponent implements OnInit {
Input() estados: IdName[] = [];

  constructor() { }

  ngOnInit(): void {
  }
buscar(value: any): void{

}
}
