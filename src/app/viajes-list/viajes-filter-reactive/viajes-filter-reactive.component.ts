import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IdName, ViajeFilter } from 'src/app/models';

@Component({
  selector: 'app-viajes-filter-reactive',
  templateUrl: './viajes-filter-reactive.component.html',
  styleUrls: ['./viajes-filter-reactive.component.scss']
})
export class ViajesFilterReactiveComponent implements OnInit {

  @Input() estados: IdName[] = [];
  @Output() buscar = new EventEmitter<ViajeFilter>();

  elFormulario: FormGroup;

  constructor(fb: FormBuilder) {

    this.elFormulario = fb.group({
      nombre: [''],
      estado: ['']
    });

  }

  ngOnInit(): void {
  }

  buscarClick(value: ViajeFilter): void {
    this.buscar.emit(value);
  }

  reset(): void {
    this.elFormulario.reset();
    this.buscar.emit({ nombre: '', estado: null });
  }

}
