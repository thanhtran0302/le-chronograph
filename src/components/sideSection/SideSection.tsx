import React, { FC, ReactNode } from 'react';
import { Layout, Title, Children } from './SideSection.styles';

interface OwnProps {
  title: string;
  children: ReactNode;
}

const SideSection: FC<OwnProps> = ({ title, children }) => (
  <Layout>
    <Title>{title}</Title>
    <Children>{children}</Children>
  </Layout>
);

export default SideSection;
