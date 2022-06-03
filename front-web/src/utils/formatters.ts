export const FormatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const FormatDate = (date: Date) => {
  return date.toLocaleDateString();
};
