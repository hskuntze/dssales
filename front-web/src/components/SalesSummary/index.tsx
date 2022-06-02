import SalesSummaryCard from './sales-summary-card';
import './styles.css';
import { ReactComponent as ListIcon } from '../../assets/images/list.svg';
import { ReactComponent as AvatarIcon } from '../../assets/images/person.svg';
import { ReactComponent as ChartIcon } from '../../assets/images/chart.svg';
import { ReactComponent as SyncIcon } from '../../assets/images/quantity.svg';

const SalesSummary = () => {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={450} label="Média" icon={<ListIcon />} />
      <SalesSummaryCard value={15000} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={105} label="Média" icon={<ChartIcon />} />
      <SalesSummaryCard value={800} label="Média" icon={<AvatarIcon />} />
    </div>
  );
};

export default SalesSummary;
