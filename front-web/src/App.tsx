import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/PieChartCard';
import SalesByDate from './components/SalesByDate';
import SalesSummary from './components/SalesSummary';
import SalesTable from './components/SalesTable';
import { FilterData } from './types/FilterData';
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { buildFilterParams, requestBackend } from './utils/request';
import { SalesByStoreType } from './types/SalesByStoreType';
import { PieChartConfig } from './types/PieChartConfig';
import { buildSalesByPayment, buildSalesByStore } from './helpers';
import { SalesByPayment } from './types/SalesByPayment';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
  const [salesByPayment, setSalesByPayment] = useState<PieChartConfig>();

  useEffect(() => {
    requestBackend
      .get<SalesByStoreType[]>('/sales/by-store', { params })
      .then((response) => {
        const newSalesByStore = buildSalesByStore(response.data);
        setSalesByStore(newSalesByStore);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params]);

  useEffect(() => {
    requestBackend
      .get<SalesByPayment[]>('/sales/by-payment-method', { params })
      .then((response) => {
        const newSalesByPayment = buildSalesByPayment(response.data);
        setSalesByPayment(newSalesByPayment);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary filterData={filterData} />
          <PieChartCard name="Lojas" labels={salesByStore?.labels} series={salesByStore?.series} />
          <PieChartCard
            name="Pagamento"
            labels={salesByPayment?.labels}
            series={salesByPayment?.series}
          />
        </div>
        <SalesTable filterData={filterData} />
      </div>
    </>
  );
}

export default App;
