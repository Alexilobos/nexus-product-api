import { Controller, Get, Query, Param, NotFoundException } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { HistoryService } from '../../history/history.service';

@Controller()
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly historyService: HistoryService,
  ) {}

  @Get('search')
  async search(@Query('q') query: string) {
    return this.productsService.searchProducts(query);
  }

  @Get('products/:id')
  async getProduct(@Param('id') id: string) {
    const product = await this.productsService.getProductById(id);
    if (!product) throw new NotFoundException('Producto no encontrado');
    await this.historyService.addToHistory(product);
    return product;
  }

  @Get('history')
  getHistory() {
    return this.historyService.getHistory();
  }
}
