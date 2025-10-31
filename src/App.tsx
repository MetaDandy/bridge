import { useMemo, useState } from 'react'
import { NotificadorDeExito } from './bridge/NotificadorExito'
import { NotificadorDeError } from './bridge/NotificadorError'
import { NotificadorDeAdvertencia } from './bridge/NotificarAdvertencia'
import { AlertNotificacion } from './bridge/AlertNotificacion'
import { SweetAlertNotification } from './bridge/SweetAlertNotification'
import { SonnerNotificacion } from './bridge/SonnerNotificacion'

function App() {
  const [tipo, setTipo] = useState<'exito' | 'error' | 'advertencia'>('exito');
  const [impl, setImpl] = useState<'alert' | 'sweetalert' | 'sonner'>('alert');

  // Selección de implementación concreta
  const notificacionImpl = useMemo(() => {
    if (impl === 'alert') return new AlertNotificacion();
    if (impl === 'sweetalert') return new SweetAlertNotification();
    return new SonnerNotificacion();
  }, [impl]);

  // Selección de abstracción refinada
  const notificador = useMemo(() => {
    if (tipo === 'exito') return new NotificadorDeExito(notificacionImpl);
    if (tipo === 'error') return new NotificadorDeError(notificacionImpl);
    return new NotificadorDeAdvertencia(notificacionImpl);
  }, [tipo, notificacionImpl]);

  // Mensaje de ejemplo
  const mensajeEjemplo = useMemo(() => {
    if (tipo === 'exito') return '¡Operación exitosa!';
    if (tipo === 'error') return '¡Ha ocurrido un error!';
    return '¡Advertencia importante!';
  }, [tipo]);

  // Lógica de notificación
  const handleNotificar = () => {
    if (tipo === 'exito' && 'exito' in notificador) {
      notificador.exito(mensajeEjemplo);
    } else if (tipo === 'error' && 'error' in notificador) {
      notificador.error(mensajeEjemplo);
    } else if (tipo === 'advertencia' && 'advertencia' in notificador) {
      notificador.advertencia(mensajeEjemplo);
    }
  };

  return (
    <div className='centrado'>
      <h2>Demo Patrón Bridge: Notificaciones</h2>
      <div className='fila-centrada'>
        <label htmlFor="tipo">Tipo de notificador:</label>
        <select id="tipo" value={tipo} onChange={e => setTipo(e.target.value as any)} style={{marginRight: '1em'}}>
          <option value="exito">Éxito</option>
          <option value="error">Error</option>
          <option value="advertencia">Advertencia</option>
        </select>
        <label htmlFor="impl">Implementación:</label>
        <select id="impl" value={impl} onChange={e => setImpl(e.target.value as any)} style={{marginRight: '1em'}}>
          <option value="alert">Alert (nativo)</option>
          <option value="sweetalert">SweetAlert2</option>
          <option value="sonner">Sonner</option>
        </select>
        <button onClick={handleNotificar}>Notificar</button>
      </div>
      <p>Selecciona el tipo de notificador y la implementación, luego pulsa "Notificar" para ver el resultado.</p>
    </div>
  );
}

export default App;
