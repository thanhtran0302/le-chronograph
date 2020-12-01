import Link from 'next/link';
import React, { FC } from 'react';
import { BlogName, BlogLabel } from '../../../constants/common';
import { Layout, Title, Subtitle } from './BlogHeader.styles';

const BlogHeader: FC = () => (
  <Layout>
    <Link href={'/blog'}>
      <Title>
        {BlogName} {BlogLabel}
      </Title>
    </Link>
    <Subtitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Subtitle>
  </Layout>
);

export default BlogHeader;
