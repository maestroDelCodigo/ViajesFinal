import { ViajeEstado } from './enums';

export interface ViajeFilter {
    nombre: string;
    estado: ViajeEstado;
}