import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Irish Motorcycles Tijuana';
  subtitle = 'Ace Visconti & Jose Tabata Collection';
  productos: Producto[] = [];
  categorias: string[] = [];
  categoriaSeleccionada = 'Todas';

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.productos = this.productosService.obtenerProductos();
    this.categorias = ['Todas', ...this.productosService.obtenerCategorias()];
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
    if (categoria === 'Todas') {
      this.productos = this.productosService.obtenerProductos();
    } else {
      this.productos = this.productosService.obtenerProductosPorCategoria(categoria);
    }
  }

  get productosFiltrados(): Producto[] {
    return this.productos;
  }
}

