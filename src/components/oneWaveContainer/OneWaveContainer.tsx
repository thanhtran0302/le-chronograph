import React, { FC, ReactNode } from 'react';
import Sidebar from '../pricesPage/sidebar/Sidebar';
import { Layout, Content } from './OneWaveContainer.styles';

interface OwnProps {
  children: ReactNode;
}

const OneWaveContainer: FC<OwnProps> = ({ children }) => (
  <Layout>
    <Sidebar />
    <Content>{children}</Content>
  </Layout>
);

export default OneWaveContainer;
