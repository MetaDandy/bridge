import { Notificador } from "./Notificador";

export class NotificadorDeError extends Notificador {
    error(mensaje?: string): void {
        const texto = mensaje ?? "Ha ocurrido un error.";
        super.notificar(`❌ Error: ${texto}`);
    }
}