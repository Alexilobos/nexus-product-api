import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(private httpService: HttpService) {}

  async searchProducts(query: string) {
    const url = `https://dummyjson.com/products/search?q=${query}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data.products.map((p) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      thumbnail: p.thumbnail,
    }));
  }

  async getProductById(id: string) {
    try {
      const url = `https://dummyjson.com/products/${id}`;
      const response = await firstValueFrom(this.httpService.get(url));
      const p = response.data;
      return {
        id: p.id,
        title: p.title,
        description: p.description,
        price: p.price,
        thumbnail: p.thumbnail,
      };
    } catch {
      return null;
    }
  }
}
