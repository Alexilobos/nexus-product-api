import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProductsController } from './products/controllers/products.controller';
import { ProductsService } from './products/services/products.service';
import { HistoryService } from './history/history.service';

@Module({
  imports: [HttpModule],
  controllers: [ProductsController],
  providers: [ProductsService, HistoryService],
})
export class AppModule {}
