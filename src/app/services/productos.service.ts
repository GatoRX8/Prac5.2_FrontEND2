import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  moneda: string;
  categoria: string;
  destacado?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: Producto[] = [
    {
      id: 1,
      titulo: 'Harley-Davidson Irish Edition',
      descripcion: 'Moto inspirada en la tradición irlandesa, diseñada especialmente para Ace Visconti. Perfecta para recorrer las calles de Tijuana con estilo y elegancia.',
      precio: 450000,
      imagen: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop',
      moneda: 'MXN',
      categoria: 'Premium',
      destacado: true
    },
    {
      id: 2,
      titulo: 'Ducati Celtic Racer',
      descripcion: 'Diseñada para Jose Tabata, nuestro panita. Esta belleza italiana con toque irlandés es ideal para carreras en las calles de Tijuana.',
      precio: 520000,
      imagen: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=800&h=600&fit=crop',
      moneda: 'MXN',
      categoria: 'Premium',
      destacado: true
    },
    {
      id: 3,
      titulo: 'Vento Thunderstar Irish',
      descripcion: 'La legendaria Vento Thunderstar con diseño irlandés. Perfecta combinación de potencia y estilo, recomendada por Ace Visconti.',
      precio: 320000,
      imagen: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=600&fit=crop',
      moneda: 'MXN',
      categoria: 'Sport',
      destacado: true
    },
    {
      id: 4,
      titulo: 'BMW Irish Roadster',
      descripcion: 'Tecnología alemana con alma irlandesa. Recomendada por Jose Tabata para viajes largos desde Tijuana.',
      precio: 495000,
      imagen: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
      moneda: 'MXN',
      categoria: 'Premium'
    },
    {
      id: 5,
      titulo: 'Kawasaki Green Thunder',
      descripcion: 'El verde irlandés en su máxima expresión. Una bestia de la velocidad para los amigos de Ace Visconti.',
      precio: 420000,
      imagen: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
      moneda: 'MXN',
      categoria: 'Sport'
    },
    {
      id: 6,
      titulo: 'Triumph Shamrock Cruiser',
      descripcion: 'Perfecta para recorridos tranquilos por Tijuana. El estilo irlandés en cada detalle, aprobada por Jose Tabata.',
      precio: 380000,
      imagen: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&h=600&fit=crop',
      moneda: 'MXN',
      categoria: 'Cruiser'
    }
  ];

  constructor() { }

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerProductosPorCategoria(categoria: string): Producto[] {
    return this.productos.filter(p => p.categoria === categoria);
  }

  obtenerProductosDestacados(): Producto[] {
    return this.productos.filter(p => p.destacado);
  }

  obtenerProductoPorId(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }

  obtenerCategorias(): string[] {
    return [...new Set(this.productos.map(p => p.categoria))];
  }
}

