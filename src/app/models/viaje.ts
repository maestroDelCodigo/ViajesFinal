export class Viaje {
    id: string;
    nombre: string;
    tipo: string;
    duracion: number;
    destino: string;
    plazas: number;
    img: string;
    color: string;
    estado: number;
    rating: number;

    constructor(item){
        this.id = item?.id || '';
        this.nombre = item?.nombre || '';
        this.tipo = item?.tipo || '';
        this.duracion = item?.duracion;
        this.destino = item?.destino;
        this.plazas = item?.plazas || 0 ;
        this.estado = item?.estado || '';
        this.rating = item?.rating || 0;


    }
}
