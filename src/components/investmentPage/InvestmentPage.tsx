import React, { FC, Fragment } from 'react';
import GraphSection from './graphSection/GraphSection';
import HeaderSection from './headerSection/HeaderSection';
import WatchPerformanceSection from './watchPerformanceSection/WatchPerformanceSection';

const InvestmentPage: FC = () => (
  <Fragment>
    <HeaderSection />
    <GraphSection />
    <WatchPerformanceSection />
  </Fragment>
);

export default InvestmentPage;
