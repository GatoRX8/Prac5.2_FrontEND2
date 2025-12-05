import { Component, ViewEncapsulation, Input } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Producto } from '../services/productos.service';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css'],
  // ViewEncapsulation.Emulated es el valor por defecto
  // pero lo especificamos explícitamente para demostrar el concepto
  encapsulation: ViewEncapsulation.Emulated
})
export class TarjetaProductoComponent {
  @Input() producto!: Producto;
  
  productoAgregado = false;

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito() {
    this.carritoService.agregarProducto(this.producto);
    this.productoAgregado = true;
    
    // Resetear después de 2 segundos
    setTimeout(() => {
      this.productoAgregado = false;
    }, 2000);
  }
}

