import { Injectable } from '@nestjs/common';
import { Product } from '../products/interfaces/product.interface';
import * as fs from 'fs';
import * as path from 'path';

const HISTORY_PATH = path.resolve(__dirname, 'history.json');
const MAX_HISTORY = 5;

@Injectable()
export class HistoryService {
  getHistory() {
    if (!fs.existsSync(HISTORY_PATH)) return [];
    return JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf8'));
  }

  async addToHistory(product) {
    const history = this.getHistory();
    const filtered = history.filter((p) => p.id !== product.id);
    filtered.unshift(product);
    const updated = filtered.slice(0, MAX_HISTORY);
    fs.writeFileSync(HISTORY_PATH, JSON.stringify(updated, null, 2));
  }
}
