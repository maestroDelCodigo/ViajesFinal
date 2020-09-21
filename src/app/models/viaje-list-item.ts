export class Viaje {
    id: string;
    nombre: string;
    tipo: string;
    duracion: number;
    destino: string;
    plazas: number;
    rating: number;

    constructor(item?: any){
        this.id = item?.id || '';
        this.nombre = item?.nombre || '';
        this.tipo = item?.tipo || '';
        this.duracion = item?.duracion || null;
        this.destino = item?.destino;
        this.plazas = item?.plazas || 0 ;
        this.rating = item?.rating || 0;


    }
}
