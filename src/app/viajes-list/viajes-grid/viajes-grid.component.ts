import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViajeListItem } from 'src/app/models';

@Component({
  selector: 'app-viajes-grid',
  templateUrl: './viajes-grid.component.html',
  styleUrls: ['./viajes-grid.component.scss']
})
export class ViajesGridComponent implements OnInit {

  @Input() viajes: ViajeListItem[] = [];
  @Input() total: number;
  @Output() editar = new EventEmitter<ViajeListItem>();
  @Output() borrar = new EventEmitter<ViajeListItem>();

  constructor() { }

  ngOnInit(): void {
  }

}
