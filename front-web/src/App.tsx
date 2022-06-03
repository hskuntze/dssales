import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/PieChartCard';
import SalesByDate from './components/SalesByDate';
import SalesSummary from './components/SalesSummary';
import SalesTable from './components/SalesTable';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Distrito Federal', 'São Paulo', 'Rio de Janeiro']}
            series={[40, 30, 30]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[25, 25, 50]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
