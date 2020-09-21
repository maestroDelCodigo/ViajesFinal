import { ViajeEstado } from "./enum";

export interface ViajeFilter{
    nombre: string;
    estado: ViajeEstado;
}