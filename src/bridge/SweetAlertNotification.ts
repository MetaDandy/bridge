import Swal from "sweetalert2";
import type { Notificacion } from "./Notificacion";

export class SweetAlertNotification implements Notificacion {
    notificar(mensaje: string): void {
        void Swal.fire({
            title: 'Notificación',
            text: mensaje,
            icon: 'success',
            confirmButtonText: 'OK',
        })
    }
}