
# Proyecto: Patrón Bridge en Notificaciones (React + TypeScript + Vite)

## Descripción

Este proyecto demuestra la aplicación del **patrón de diseño Bridge** en el contexto de una aplicación frontend desarrollada con **React**, **TypeScript** y **Vite**. El objetivo es desacoplar la lógica de notificaciones de sus diferentes implementaciones, permitiendo cambiar la forma en que se muestran las notificaciones sin modificar la lógica principal de la aplicación.

> **Materia:** Arquitectura de Software  
> **Universidad:** Universidad Autónoma Gabriel Rene Moreno
> **Facultad:** Facultad de Ciencias de la Computación y Telecomunicaciones 
> **Autor:** Joseph Benitez Arroyo

---

## ¿Qué es el patrón Bridge?

El patrón Bridge permite separar una abstracción de su implementación, de modo que ambas puedan evolucionar independientemente. En este proyecto, la abstracción es el sistema de notificaciones, y las implementaciones son las distintas formas de mostrar una notificación (alerta nativa, SweetAlert2, Sonner).

---

## Estructura del proyecto

```
bridge/
├── public/
├── src/
│   ├── assets/
│   ├── bridge/
│   │   ├── AlertNotificacion.ts
│   │   ├── Notificacion.ts
│   │   ├── Notificador.ts
│   │   ├── SonnerNotificacion.ts
│   │   └── SweetAlertNotification.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

- **src/bridge/**: Implementaciones del patrón Bridge para notificaciones.
- **App.tsx**: Interfaz principal que permite seleccionar la implementación y disparar la notificación.
- **index.css**: Estilos globales para centrar y alinear la interfaz.

---

## Implementación del Bridge

### Interfaces y clases principales

- **Notificacion.ts**  
  ```typescript
  export interface Notificacion {
      notificar(mensaje: string): void
  }
  ```

- **Notificador.ts**  
  ```typescript
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
  ```

- **AlertNotificacion.ts**  
  ```typescript
  import type { Notificacion } from "./Notificacion";
  export class AlertNotificacion implements Notificacion {
      notificar(mensaje: string): void {
          alert(mensaje);
      }
  }
  ```

- **SweetAlertNotification.ts**  
  ```typescript
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
  ```

- **SonnerNotificacion.ts**  
  ```typescript
  import { toast } from "sonner";
  import type { Notificacion } from "./Notificacion";
  export class SonnerNotificacion implements Notificacion {
      notificar(mensaje: string): void {
          toast.success(mensaje);
      }
  }
  ```

---

## Interfaz de usuario

La interfaz permite seleccionar la implementación de notificación y probar el patrón Bridge en acción:

```tsx
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
```

---

## Instalación y ejecución

1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abre la app en tu navegador:**
   ```
   http://localhost:5173
   ```

---

## Prueba del patrón Bridge

- Selecciona una implementación en el menú desplegable:
  - **Alert (nativo):** Usa la función `alert` del navegador.
  - **SweetAlert2:** Usa la librería SweetAlert2 para mostrar un modal estilizado.
  - **Sonner:** Usa la librería Sonner para mostrar un toast moderno.
- Pulsa el botón **Notificar** para ver el resultado.

---

## Créditos y contexto

Este proyecto fue realizado como parte de la materia **Arquitectura de Software** para demostrar el uso de patrones de diseño en aplicaciones modernas.  
Puedes modificar, extender o adaptar el código para otros patrones o casos de uso.

---
