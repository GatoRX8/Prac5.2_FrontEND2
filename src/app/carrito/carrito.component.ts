import { Component, OnInit } from '@angular/core';
import { CarritoService, ProductoCarrito } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productosCarrito: ProductoCarrito[] = [];
  mostrarCarrito = false;

  constructor(public carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.carrito$.subscribe(productos => {
      this.productosCarrito = productos;
    });
  }

  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  eliminarProducto(id: number) {
    this.carritoService.eliminarProducto(id);
  }

  actualizarCantidad(id: number, cantidad: number) {
    this.carritoService.actualizarCantidad(id, cantidad);
  }

  vaciarCarrito() {
    if (confirm('¿Estás seguro de vaciar el carrito?')) {
      this.carritoService.vaciarCarrito();
    }
  }

  finalizarCompra() {
    const total = this.carritoService.obtenerTotal();
    alert(`¡Gracias por tu compra!\n\nTotal: $${total.toLocaleString('es-MX')} MXN\n\nDedicado a Ace Visconti y Jose Tabata\nDesde Tijuana, México 🇲🇽`);
    this.carritoService.vaciarCarrito();
    this.mostrarCarrito = false;
  }
}

