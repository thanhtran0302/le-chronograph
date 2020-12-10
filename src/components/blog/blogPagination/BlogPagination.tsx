import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { FC, Fragment, ReactNode } from 'react';
import { Layout, PageItem } from './BlogPagination.styles';
import ArrowFirst from '../../../assets/icons/arrow-first.svg';
import ArrowLast from '../../../assets/icons/arrow-last.svg';
import ArrowPrev from '../../../assets/icons/arrow-prev.svg';
import ArrowNext from '../../../assets/icons/arrow-next.svg';

interface BlogPaginationProps {
  totalPages: number;
  totalResultsSize: number;
}

const BlogPagination: FC<BlogPaginationProps> = ({
  totalResultsSize,
  totalPages
}) => {
  const { query }: NextRouter = useRouter();
  const currentPage: number = Number(query.page || 1);
  const pages: ReactNode[] = [];

  for (let i: number = 1; i <= totalPages; ++i) {
    pages.push(
      <Link key={`page-${i}`} href={`/blog?page=${i}`}>
        <PageItem isSelected={i === currentPage}>{i}</PageItem>
      </Link>
    );
  }

  return (
    <Layout>
      <Link href={`/blog?page=1`}>
        <PageItem isSelected={false}>
          <ArrowFirst />
        </PageItem>
      </Link>
      <Link href={`/blog?page=${currentPage === 1 ? 1 : currentPage - 1}`}>
        <PageItem isSelected={false}>
          <ArrowPrev />
        </PageItem>
      </Link>
      <Fragment>{pages}</Fragment>
      <Link
        href={`/blog?page=${
          currentPage !== totalPages ? currentPage + 1 : currentPage
        }`}
      >
        <PageItem isSelected={false}>
          <ArrowNext />
        </PageItem>
      </Link>
      <Link href={`/blog?page=${totalPages}`}>
        <PageItem isSelected={false}>
          <ArrowLast />
        </PageItem>
      </Link>
    </Layout>
  );
};

export default BlogPagination;
