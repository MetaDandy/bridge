import type { Notificacion } from "./Notificacion";

export class Notificador {
    protected notificacion: Notificacion;

    constructor(notificacion: Notificacion) {
        this.notificacion = notificacion;
    }

    notificar(mensaje: string): void {
        this.notificacion.notificar(mensaje);
    }
}