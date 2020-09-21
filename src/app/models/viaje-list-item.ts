import { ViajeEstado } from './enums';

export class ViajeListItem {
    id: string;
    nombre: string;
    duracion: string;
    destino: string;
    plazas: string;
    estado: ViajeEstado;
    rating: number;

    constructor(item?: any) {
        this.id = item?.id || '';
        this.nombre = item?.nombre || '';
        this.duracion = item?.duracion || null;
        this.destino = item?.destino || '';
        this.plazas = item?.plazas || 0;
        this.estado = item?.estado ? parseInt(item.estado, 10) :  null;
        this.rating = item?.rating || null;
    }

}