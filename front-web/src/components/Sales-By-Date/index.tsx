import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';

const initialData = [
  {
    x: '2020-01-01',
    y: 50
  },
  {
    x: '2020-02-01',
    y: 10
  }
];

const SalesByDate = () => {
  return (
    <div className="sales-by-date-container base-card">
      <div className="sales-by-date-header">
        <h4 className="sales-by-date-title">Evolução de Vendas</h4>
        <span className="sales-by-date-period">14/07/2022 até 29/07/2022</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-info">
          <h2 className="sales-by-date-info-quantity">450.000,00</h2>
          <span className="sales-by-date-info-label">Vendas no período</span>
          <span className="sales-by-date-info-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: initialData }]}
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
