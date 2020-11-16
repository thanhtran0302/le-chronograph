import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import spaces from '../../constants/spaces';

interface LayoutProps {
  hasPosts: boolean;
}

export const Layout = styled.div<LayoutProps>`
  margin-top: ${spaces[56]};
  display: grid;
  grid-column-gap: ${spaces[32]};
  grid-row-gap: ${spaces[32]};

  ${({ hasPosts }: LayoutProps) =>
    hasPosts
      ? `grid-template-columns: 1fr 1fr 1fr 1fr;`
      : `grid-template-columns: 1fr;`}

  @media (max-width: ${breakpoints[1440]}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const NoPosts = styled.div`
  ${paragraphs.h2};
  text-align: center;
  color: ${colors.dark[80]};
`;
