import { Notificador } from "./Notificador";

export class NotificadorDeExito extends Notificador {
    exito(mensaje?: string): void {
        const texto = mensaje ?? "Operación completada correctamente.";
        super.notificar(`✅ Éxito: ${texto}`);
    }
}