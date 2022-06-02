import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import SalesByDate from './components/Sales-By-Date';
import SalesSummary from './components/SalesSummary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
        </div>
      </div>
    </>
  );
}

export default App;
