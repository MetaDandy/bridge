import { toast } from "sonner";
import type { Notificacion } from "./Notificacion";

export class SonnerNotificacion implements Notificacion {
    notificar(mensaje: string): void {
        toast.success(mensaje);
    }
}