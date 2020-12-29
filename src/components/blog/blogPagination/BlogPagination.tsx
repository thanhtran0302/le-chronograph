import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { FC, Fragment, ReactNode } from 'react';
import { Layout, PageItem } from './BlogPagination.styles';
import ArrowFirst from '../../../assets/icons/arrow-first.svg';
import ArrowLast from '../../../assets/icons/arrow-last.svg';
import ArrowPrev from '../../../assets/icons/arrow-prev.svg';
import ArrowNext from '../../../assets/icons/arrow-next.svg';
import { pagination } from '../../../utils/global';
import qs from 'qs';

interface BlogPaginationProps {
  totalPages: number;
  totalResultsSize: number;
}

const BlogPagination: FC<BlogPaginationProps> = ({
  totalResultsSize,
  totalPages
}) => {
  const { query }: NextRouter = useRouter();
  const category: string = (query.category as string) || 'all';
  const currentPage: number = Number(query.page || 1);
  const pages: ReactNode[] = [];

  for (let i: number = 1; i <= totalPages; ++i) {
    pages.push(
      <Link
        key={`page-${i}`}
        href={{ pathname: 'blog', query: { category, page: i } }}
      >
        <PageItem isSelected={i === currentPage}>{i}</PageItem>
      </Link>
    );
  }

  return (
    <Layout>
      <Link href={{ pathname: 'blog', query: { category, page: 1 } }}>
        <PageItem isSelected={false}>
          <ArrowFirst />
        </PageItem>
      </Link>
      <Link
        href={{
          pathname: 'blog',
          query: {
            category,
            page: pagination(totalPages, currentPage, currentPage - 1)
          }
        }}
      >
        <PageItem isSelected={false}>
          <ArrowPrev />
        </PageItem>
      </Link>
      <Fragment>{pages}</Fragment>
      <Link
        href={{
          pathname: 'blog',
          query: {
            category,
            page: pagination(totalPages, currentPage, currentPage + 1)
          }
        }}
      >
        <PageItem isSelected={false}>
          <ArrowNext />
        </PageItem>
      </Link>
      <Link href={{ pathname: 'blog', query: { category, page: totalPages } }}>
        <PageItem isSelected={false}>
          <ArrowLast />
        </PageItem>
      </Link>
    </Layout>
  );
};

export default BlogPagination;
