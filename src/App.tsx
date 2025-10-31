import { useMemo, useState } from 'react'
import { Notificador } from './bridge/Notificador'
import { AlertNotificacion } from './bridge/AlertNotificacion'
import { SweetAlertNotification } from './bridge/SweetAlertNotification'
import { SonnerNotificacion } from './bridge/SonnerNotificacion'

function App() {
  const [impl, setImpl] = useState<'alert' | 'sweetalert' | 'sonner'>('alert')
  
    const notificador = useMemo(() => {
      if (impl === 'alert') return new Notificador(new AlertNotificacion())
      if (impl === 'sweetalert') return new Notificador(new SweetAlertNotification())
      return new Notificador(new SonnerNotificacion())
    }, [impl])
  
    return (
      <div className='centrado'>
        <h2>Demo Patrón Bridge: Notificaciones</h2>
        <div className='fila-centrada'>
          <label htmlFor="impl">Implementación:</label>
          <select id="impl" value={impl} onChange={e => setImpl(e.target.value as any)}>
            <option value="alert">Alert (nativo)</option>
            <option value="sweetalert">SweetAlert2</option>
            <option value="sonner">Sonner</option>
          </select>
          <button onClick={() => notificador.notificar('¡Bridge funcionando!')}>Notificar</button>
        </div>
        <p>Selecciona una implementación y pulsa "Notificar" para ver el resultado.</p>
        
      </div>
    )
}

export default App
