import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../utils/request';
import { SalesByDateType } from '../../types/SalesByDateType';
import { ChartSeriesData } from '../../types/ChartSeriesData';
import { FormatDate, FormatPrice } from '../../utils/formatters';
import { FilterData } from '../../types/FilterData';

type Props = {
  filterData?: FilterData;
};

const SalesByDate = ({ filterData }: Props) => {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    requestBackend
      .get<SalesByDateType[]>('/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE')
      .then((response) => {
        const newChartSeries = buildChartSeries(response.data);
        setChartSeries(newChartSeries);
        const newTotalSum = sumSalesByDate(response.data);
        setTotalSum(newTotalSum);
      });
  }, []);

  return (
    <div className="sales-by-date-container base-card">
      <div className="sales-by-date-header">
        <h4 className="sales-by-date-title">Evolução de Vendas</h4>
        {filterData?.dates && (
          <span className="sales-by-date-period">
            {FormatDate(filterData?.dates?.[0])} até {FormatDate(filterData?.dates?.[1])}
          </span>
        )}
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-info">
          <h2 className="sales-by-date-info-quantity">{FormatPrice(totalSum)}</h2>
          <span className="sales-by-date-info-label">Vendas no período</span>
          <span className="sales-by-date-info-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: chartSeries }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesByDate;
