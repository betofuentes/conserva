# Conserva - Landing Page

Landing page para la venta de conservadores de hielo y servicio de venta de hielo.

## Características

- **Diseño moderno y responsive**: Adaptado para todos los dispositivos
- **Formulario de contacto**: Con validación y manejo de envío
- **Sección de productos**: Muestra diferentes capacidades de conservadores
- **Sección de servicios**: Información sobre el servicio de venta de hielo
- **Navegación suave**: Scroll suave entre secciones
- **Animaciones**: Efectos visuales al hacer scroll

## Estructura del Proyecto

```
conserva/
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript para interactividad
└── README.md       # Este archivo
```

## Uso

Simplemente abre `index.html` en tu navegador para ver la landing page.

### Desarrollo Local

Puedes usar un servidor local simple:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## Personalización

### Colores

Los colores principales se pueden modificar en `styles.css` en la sección `:root`:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00a8e8;
    /* ... */
}
```

### Formulario de Contacto

El formulario de contacto envía los datos a través de **Formspree**, por lo que no se requiere un backend propio.

- **Endpoint Formspree**: `https://formspree.io/f/mnjnejvy` configurado en el atributo `action` del formulario en `index.html`.
- **Método HTTP**: `POST`.
- **Validación en el cliente**:  
  - Se valida que los campos requeridos (nombre, correo, teléfono y selección de interés) estén completos.  
  - Se valida el formato del correo electrónico.  
  - Si la validación es correcta, el formulario se envía con `contactForm.submit()` desde `script.js`.

Si deseas cambiar el destino del formulario, actualiza la URL del `action` por el nuevo endpoint de Formspree (o servicio equivalente).

## Productos

| Modelo | Tamaño       | Volumen (L) | Puertas | Peso   | Ancho (cm) |
|--------|--------------|-------------|---------|--------|------------|
| **20** | Pequeño      | 258         | 1       | 67 kg  | 64         |
| **55** | Mediano      | 946         | 1       | 102 kg | 115        |
| **95** | Grande       | 1095        | 1       | 120 kg | 115        |
| **190**| Extra grande | 2189        | 2       | 250 kg | 229        |

## Servicios

- Venta de hielo en cubos
- Venta de hielo en escamas
- Entrega a domicilio
- Venta al mayoreo

## Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y Grid/Flexbox)
- JavaScript (Vanilla JS)
- Google Fonts (Inter)

## Licencia

Ver archivo LICENSE para más detalles.
