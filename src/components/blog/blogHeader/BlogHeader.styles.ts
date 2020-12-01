import styled from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import colors from '../../../constants/colors';
import paragraphs from '../../../constants/paragraphs';
import spaces from '../../../constants/spaces';

export const Layout = styled.div`
  text-align: center;
  background: ${colors.mainDark};
  padding: ${spaces[72]} 0;
  color: ${colors.mainLight};

  @media (max-width: ${breakpoints.tablet.iPadPro11}) {
    padding: ${spaces[24]};
  }
`;

export const Title = styled.div`
  ${paragraphs.h1};
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet.iPadPro11}) {
    ${paragraphs.h2};
  }
`;

export const Subtitle = styled.div`
  ${paragraphs.body1};
  max-width: 650px;
  margin: ${spaces[12]} auto;
`;
