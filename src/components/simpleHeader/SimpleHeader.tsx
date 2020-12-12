import Link from 'next/link';
import React, { FC } from 'react';
import { Layout, Title, Subtitle } from './SimpleHeader.styles';

interface SimpleHeaderProps {
  title: string;
  subtitle: string;
  link: string;
}

const SimpleHeader: FC<SimpleHeaderProps> = ({ title, subtitle, link }) => (
  <Layout>
    <Link href={link}>
      <Title>{title}</Title>
    </Link>
    <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
  </Layout>
);

export default SimpleHeader;
