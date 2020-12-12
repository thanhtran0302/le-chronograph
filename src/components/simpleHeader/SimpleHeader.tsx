import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { Layout, Title, Subtitle } from './SimpleHeader.styles';

interface SimpleHeaderProps {
  title: string;
  subtitle: string;
  link: string;
  children?: ReactNode;
}

const SimpleHeader: FC<SimpleHeaderProps> = ({
  title,
  subtitle,
  link,
  children
}) => (
  <Layout>
    <Link href={link}>
      <Title>{title}</Title>
    </Link>
    <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
    {children && children}
  </Layout>
);

export default SimpleHeader;
