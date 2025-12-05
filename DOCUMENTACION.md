# Documentación Técnica - Proyecto Angular Responsive
## Tarjeta de Producto con Diseño Adaptativo

**Autores:**  
- **Gael Ramses Escobedo Huerta**  
- **Daniel Hernandez Mancilla**  

---

## División de Trabajo

### **Gael Ramses Escobedo Huerta**
- Investigación: View Encapsulation, Responsive vs Adaptive Design
- Implementación: Estilos del componente, Media Queries, diseño responsive
- Diseño visual: Tema irlandés, interfaz de usuario

### **Daniel Hernandez Mancilla**
- Investigación: srcset y picture element, patrones de diseño adaptativo
- Implementación: Componentes TypeScript, servicios, lógica de negocio
- Funcionalidad: Carrito de compras, sistema de productos

---

## 1. Investigación de Conceptos

### 1.1 View Encapsulation en Angular

**Definición:** Mecanismo que aísla los estilos CSS de un componente para prevenir conflictos.

**Modos de Encapsulación:**

| Modo | Descripción | Uso recomendado |
|------|-------------|-----------------|
| **Emulated** | Emula Shadow DOM con atributos únicos | Por defecto, compatible con todos los navegadores |
| **None** | Sin encapsulación, estilos globales | Estilos compartidos entre componentes |
| **ShadowDom** | Shadow DOM nativo del navegador | Aplicaciones modernas, aislamiento completo |

**Implementación en el proyecto:**
```typescript
@Component({
  selector: 'app-tarjeta-producto',
  encapsulation: ViewEncapsulation.Emulated
})
```

---

### 1.2 Patrones de Diseño Web Adaptativo

#### Responsive Web Design (RWD)

**Características:**
- Un solo código HTML/CSS para todos los dispositivos
- Layout fluido con media queries
- Adaptación continua al tamaño de pantalla

**Ventajas:** Mantenimiento simple, mejor SEO, experiencia consistente

#### Adaptive Web Design (AWD)

**Características:**
- Múltiples versiones optimizadas por dispositivo
- Detección del dispositivo (servidor/cliente)
- Layouts específicos predefinidos

**Ventajas:** Mejor rendimiento, control total por dispositivo

#### Comparación

| Aspecto | RWD | AWD |
|---------|-----|-----|
| Código | Un solo HTML/CSS | Múltiples versiones |
| Adaptación | Fluida y continua | En breakpoints fijos |
| Mantenimiento | Simple | Complejo |
| SEO | Mejor | Más complejo |

**Enfoque del proyecto:** RWD con Mobile First

---

### 1.3 srcset y picture

#### Atributo srcset

Especifica múltiples versiones de una imagen. El navegador elige la más apropiada.

**Sintaxis:**
```html
<img 
  src="imagen-default.jpg" 
  srcset="imagen-small.jpg 400w,
          imagen-medium.jpg 800w,
          imagen-large.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 800px"
  alt="Descripción">
```

**Ventajas:** Mejor rendimiento, calidad en pantallas HD, ahorro de ancho de banda

#### Etiqueta picture

Control total sobre qué imagen mostrar según condiciones.

**Sintaxis:**
```html
<picture>
  <source media="(min-width: 992px)" srcset="desktop.jpg">
  <source media="(min-width: 600px)" srcset="tablet.jpg">
  <img src="mobile.jpg" alt="Descripción">
</picture>
```

**Ventajas:** Control total, formatos modernos (WebP, AVIF), composiciones diferentes

**Cuándo usar:**
- **srcset:** Misma imagen en diferentes resoluciones
- **picture:** Diferentes composiciones o formatos por dispositivo

---

## 2. Implementación

### 2.1 Estructura

```
src/app/
├── services/
│   ├── carrito.service.ts
│   └── productos.service.ts
├── carrito/
│   └── carrito.component.*
└── tarjeta-producto/
    └── tarjeta-producto.component.*
```

### 2.2 Funcionalidades

**Componentes:**
- TarjetaProductoComponent (tarjeta responsive)
- CarritoComponent (carrito de compras)

**Servicios:**
- ProductosService (catálogo de 6 productos)
- CarritoService (gestión con localStorage)

**Características:**
- Catálogo de 6 motos con tema irlandés
- Filtros por categoría
- Carrito funcional (agregar, eliminar, modificar)
- Persistencia con localStorage
- Responsive (móvil, tableta, escritorio)

### 2.3 Breakpoints

| Dispositivo | Breakpoint | Layout | Ancho |
|-------------|------------|--------|-------|
| Móvil | < 600px | Vertical | 90% |
| Tableta | 600px - 992px | Horizontal 40/60 | 95% |
| Escritorio | > 992px | Horizontal optimizado | Max 1000px |

### 2.4 Estilos por Componente

- **Encapsulación:** ViewEncapsulation.Emulated
- **Variables CSS:** Tema irlandés (verde #169b62, naranja #ff883e)
- **Mobile First:** Estilos base para móvil
- **Media Queries:** Tableta y escritorio
- **Imágenes:** object-fit: cover (sin distorsión)

---

## 3. Instrucciones de Uso

### Instalación
```bash
npm install
```

### Ejecución
```bash
ng serve
# o
npm start
```

Abrir: `http://localhost:4200`

### Build para Producción
```bash
ng build --prod
```

---

## 4. Testing

### Verificar Responsividad

**Móvil (< 600px):**
- DevTools (F12) → Modo dispositivo móvil
- Verificar layout vertical, ancho 90%

**Tableta (600px - 992px):**
- Ajustar viewport a 768px
- Verificar layout horizontal 40/60

**Escritorio (> 992px):**
- Ajustar viewport a 1200px
- Verificar ancho máximo 1000px

### Características Verificadas

**Diseño Responsive:**
- ✅ Estilos encapsulados
- ✅ Layout adaptativo en todos los breakpoints
- ✅ Imágenes sin distorsión
- ✅ Grid responsive

**Funcionalidades:**
- ✅ Carrito de compras funcional
- ✅ Filtros por categoría
- ✅ Persistencia con localStorage
- ✅ Contador de productos
- ✅ Animaciones suaves

---

## 5. Tecnologías

- Angular 17
- TypeScript
- CSS3 (Flexbox, Media Queries, Grid)
- HTML5
- RxJS (Observables)
- LocalStorage

---

## 6. Referencias

- [Angular - View Encapsulation](https://angular.io/guide/view-encapsulation)
- [MDN - Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [MDN - srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)
- [MDN - picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)

---

**Autores:** Gael Ramses Escobedo Huerta & Daniel Hernandez Mancilla
