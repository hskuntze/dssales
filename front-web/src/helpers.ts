import { SalesByPayment } from './types/SalesByPayment';
import { SalesByStoreType } from './types/SalesByStoreType';

export const buildSalesByStore = (sales: SalesByStoreType[]) => {
  const labels = sales.map((sale) => sale.storeName);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};

export const buildSalesByPayment = (sales: SalesByPayment[]) => {
  const labels = sales.map((sale) => sale.description);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
