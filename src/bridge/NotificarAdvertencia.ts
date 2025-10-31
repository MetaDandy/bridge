import { Notificador } from "./Notificador";

export class NotificadorDeAdvertencia extends Notificador {
    advertencia(mensaje?: string): void {
        const texto = mensaje ?? "Revisa los detalles antes de continuar.";
        super.notificar(`⚠️ Advertencia: ${texto}`);
    }
}