export class Viaje {
    id: string;
    nombre: string;
    tipo: string;
    duracion: string;
    destino: string;
    plazas: string;
    img: string;
    color: string;
    estado: number;
    rating: number;

    constructor(item?: any) {
        this.id = item?.id || '';
        this.nombre = item?.nombre || '';
        this.tipo = item?.tipo || '';
        this.duracion = item?.duracion || '';
        this.destino = item?.destino || '';
        this.plazas = item?.plazas || '';
        this.img = item?.img || '';
        this.color = item?.color || '';
        this.estado = item?.estado ? parseInt(item.estado, 10) :  null;
        this.rating = item?.rating || null;
    }


}