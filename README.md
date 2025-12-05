# 🏍️ Irish Motorcycles Tijuana
## Proyecto Angular - Tarjeta de Producto Responsive

**Autores:**  
- Gael Ramses Escobedo Huerta  
- Daniel Hernandez Mancilla  

**Ubicación:** Tijuana, México  
**Tema:** Motocicletas con toque irlandés - Referencias a Ace Visconti y Jose Tabata

---

## 📋 Descripción

Proyecto Angular que implementa un componente de tarjeta de producto completamente responsive, utilizando:

- ✅ Estilos por componente con View Encapsulation
- ✅ Media Queries para diseño adaptativo
- ✅ Enfoque Mobile First
- ✅ Imágenes responsivas
- ✅ Patrones de diseño modernos

---

## 🚀 Instalación y Uso

### Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Angular CLI (opcional, se puede usar npm scripts)

### Instalación

```bash
npm install
```

### Ejecutar en Desarrollo

```bash
npm start
# o
ng serve
```

Abrir en el navegador: `http://localhost:4200`

### Build para Producción

```bash
npm run build
# o
ng build --prod
```

---

## 📱 Características Responsive

### Móvil (< 600px)
- Layout vertical (imagen arriba, contenido abajo)
- Ancho: 90% del contenedor
- Diseño optimizado para pantallas pequeñas

### Tableta (600px - 992px)
- Layout horizontal (40% imagen, 60% contenido)
- Ancho: 95% del contenedor
- Mejor aprovechamiento del espacio

### Escritorio (> 992px)
- Layout horizontal optimizado
- Ancho máximo: 1000px
- Espaciado y tipografía mejorados

---

## 🎨 Tema y Referencias

- **Tema Irlandés:** Colores verde y naranja, gradientes elegantes
- **Motos:** Producto "Harley-Davidson Irish Edition"
- **Ace Visconti:** Referencia como "El maestro de las carreras"
- **Jose Tabata:** Referencia como "Nuestro panita de confianza"

---

## 📚 Documentación

Para información detallada sobre los conceptos implementados, consulta:

**[DOCUMENTACION.md](./DOCUMENTACION.md)**

Incluye:
- View Encapsulation en Angular
- Responsive Web Design vs Adaptive Web Design
- Uso de srcset y picture
- Estructura del proyecto
- Guía de implementación

---

## 🛠️ Tecnologías Utilizadas

- Angular 17
- TypeScript
- CSS3 (Flexbox, Media Queries)
- HTML5

---

## 📝 Estructura del Proyecto

```
src/
├── app/
│   ├── app.component.*
│   ├── app.module.ts
│   └── tarjeta-producto/
│       ├── tarjeta-producto.component.ts
│       ├── tarjeta-producto.component.html
│       └── tarjeta-producto.component.css
├── index.html
├── main.ts
└── styles.css
```

---

## ✅ Checklist de Requisitos

- [x] Componente TarjetaProductoComponent creado
- [x] Estilos encapsulados por componente
- [x] Diseño Mobile First
- [x] Media Queries para tableta y escritorio
- [x] Imágenes responsivas (object-fit: cover)
- [x] Título, descripción, precio, imagen y botón
- [x] Tema irlandés aplicado
- [x] Referencias a Ace Visconti y Jose Tabata
- [x] Documentación completa

---

## 👥 Autores

**Gael Ramses Escobedo Huerta**  
**Daniel Hernandez Mancilla**

Desarrollado en Tijuana, México 🇲🇽

---

## 📄 Licencia

Este proyecto es parte de una práctica académica.

---

**¡Disfruta explorando el componente responsive! 🏍️🇮🇪**

