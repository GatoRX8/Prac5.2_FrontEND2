import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ProductoCarrito {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productosCarrito: ProductoCarrito[] = [];
  private carritoSubject = new BehaviorSubject<ProductoCarrito[]>([]);
  public carrito$ = this.carritoSubject.asObservable();

  constructor() {
    // Cargar carrito del localStorage si existe
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.productosCarrito = JSON.parse(carritoGuardado);
      this.carritoSubject.next(this.productosCarrito);
    }
  }

  agregarProducto(producto: any) {
    const productoExistente = this.productosCarrito.find(p => p.id === producto.id);
    
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      this.productosCarrito.push({
        id: producto.id,
        titulo: producto.titulo,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad: 1
      });
    }
    
    this.actualizarCarrito();
  }

  eliminarProducto(id: number) {
    this.productosCarrito = this.productosCarrito.filter(p => p.id !== id);
    this.actualizarCarrito();
  }

  actualizarCantidad(id: number, cantidad: number) {
    const producto = this.productosCarrito.find(p => p.id === id);
    if (producto) {
      producto.cantidad = cantidad;
      if (producto.cantidad <= 0) {
        this.eliminarProducto(id);
      } else {
        this.actualizarCarrito();
      }
    }
  }

  vaciarCarrito() {
    this.productosCarrito = [];
    this.actualizarCarrito();
  }

  obtenerCarrito(): ProductoCarrito[] {
    return this.productosCarrito;
  }

  obtenerCantidadTotal(): number {
    return this.productosCarrito.reduce((total, producto) => total + producto.cantidad, 0);
  }

  obtenerTotal(): number {
    return this.productosCarrito.reduce((total, producto) => 
      total + (producto.precio * producto.cantidad), 0
    );
  }

  private actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(this.productosCarrito));
    this.carritoSubject.next(this.productosCarrito);
  }
}

