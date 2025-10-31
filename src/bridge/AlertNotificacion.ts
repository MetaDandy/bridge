import type { Notificacion } from "./Notificacion";

export class AlertNotificacion implements Notificacion {
    notificar(mensaje: string): void {
        alert(mensaje);
    }
}