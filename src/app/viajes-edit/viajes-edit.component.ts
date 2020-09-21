import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IdName } from '../models';
import { ToastrWrapperService } from '../services/toastr-wrapper.service';
import { ViajesModelService } from '../services/viajes-model.service';

@Component({
  selector: 'app-viajes-edit',
  templateUrl: './viajes-edit.component.html',
  styleUrls: ['./viajes-edit.component.scss']
})
export class ViajesEditComponent implements OnInit {

  elFormulario: FormGroup;
  estados: IdName[] = [];

  ratingValues: number[];

  submit = false;
  loading = false;

  private viajeId: any;

  constructor(
    private tosstrService: ToastrWrapperService,
    fb: FormBuilder, private viajesModel: ViajesModelService,
    activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe(x => {
      this.viajeId = x?.id || null;
    });
    this.buildForm(fb);
  }

  ngOnInit(): void {
    this.estados = this.viajesModel.getViajesEstados();
    this.ratingValues = [...Array(6).keys()].filter(x => x);

    if (this.viajeId) {
      this.viajesModel.getViaje(this.viajeId).subscribe(x => {
        if (x) {
          this.elFormulario.patchValue(x);
        }
      })
    }
  }

  guardar(value: any): void {
    this.submit = true;
    this.loading = true;
    if (value) {
      this.viajesModel.saveViaje(value).subscribe(x => {
        this.loading = false;
        if (x) {
          this.elFormulario.patchValue(x);
          this.tosstrService.showMensajeOk('El viaje se ha guardado con exito', 'Guardar Viaje')
        }

      });
    }
  }

  nuevoViaje(): void {
    this.submit = false;
    this.elFormulario.reset();
  }

  private buildForm(fb: FormBuilder): void {
    this.elFormulario = fb.group({
      id: [''],
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      tipo: ['', Validators.required],
      duracion: ['0', Validators.compose([Validators.required, Validators.min(1)])],
      destino: ['', Validators.required],
      plazas: ['', Validators.compose([Validators.required, Validators.min(1)])],
      img: [''],
      color: [''],
      estado: [null, Validators.required],
      rating: ['', Validators.required]
    });
  }

}
