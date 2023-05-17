import { rest } from 'msw';
import productList from '../mocks/productList.json';

export const handlers = [
  // 상품목록 조회
  rest.get('/api/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productList));
  }),
];
