import { useEffect, useMemo, useState } from 'react';
import { FilterData } from '../../types/FilterData';
import { Gender } from '../../types/Gender';
import { Sales } from '../../types/Sales';
import { SpringPage } from '../../types/SpringPage';
import { formatDate, formatPrice } from '../../utils/formatters';
import { buildFilterParams, requestBackend } from '../../utils/request';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

const extraParams = {
  page: 0,
  size: 15
};

const SalesTable = ({ filterData }: Props) => {
  const [sales, setSales] = useState<Sales[]>([]);
  const params = useMemo(() => buildFilterParams(filterData, extraParams), [filterData]);

  useEffect(() => {
    requestBackend
      .get<SpringPage<Sales>>('/sales', { params })
      .then((response) => {
        setSales(response.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params]);

  const formatGender = (gender: Gender) => {
    const textByGender = {
      MALE: 'Masculino',
      FEMALE: 'Feminino',
      OTHER: 'Outros'
    };

    return textByGender[gender];
  };

  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{formatDate(sale.date)}</td>
              <td>{formatGender(sale.gender)}</td>
              <td>{sale.categoryName}</td>
              <td>{sale.storeName}</td>
              <td>{sale.paymentMethod}</td>
              <td>{formatPrice(sale.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
