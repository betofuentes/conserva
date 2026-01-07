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

El formulario actualmente simula el envío. Para conectarlo a un backend real, modifica la función `simulateFormSubmission` en `script.js` para hacer una llamada a tu API.

## Productos

- Conservadores Pequeños (10-20 litros)
- Conservadores Medianos (30-50 litros)
- Conservadores Grandes (60-100 litros)
- Conservadores Extra Grandes (100+ litros)

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
