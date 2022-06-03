import SalesSummaryCard from './sales-summary-card';
import './styles.css';
import { ReactComponent as ListIcon } from '../../assets/images/list.svg';
import { ReactComponent as AvatarIcon } from '../../assets/images/person.svg';
import { ReactComponent as ChartIcon } from '../../assets/images/chart.svg';
import { ReactComponent as SyncIcon } from '../../assets/images/quantity.svg';
import { FilterData } from '../../types/FilterData';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, requestBackend } from '../../utils/request';
import { SalesSummaryType } from '../../types/SalesSummaryType';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

const SalesSummary = ({ filterData }: Props) => {
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);
  const [summary, setSummary] = useState<SalesSummaryType>(initialSummary);

  useEffect(() => {
    requestBackend
      .get<SalesSummaryType>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={Number(summary?.avg.toFixed(2))} label="Média" icon={<ListIcon />} />
      <SalesSummaryCard value={summary?.count} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label="Mínimo" icon={<ChartIcon />} />
      <SalesSummaryCard value={summary?.max} label="Máximo" icon={<AvatarIcon />} />
    </div>
  );
};

export default SalesSummary;
