import styled from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import paragraphs from '../../../constants/paragraphs';
import spaces from '../../../constants/spaces';

export const Layout = styled.div`
  padding: ${spaces[32]} 0;
`;

export const Title = styled.div`
  ${paragraphs.h1};
  display: flex;
  justify-content: center;
  margin-bottom: ${spaces[24]};

  @media (max-width: ${breakpoints.tablet.iPadMini}) {
    ${paragraphs.h3};
  }
`;

export const Paragraph = styled.div`
  ${paragraphs.body1};
  text-align: center;
  margin-top: ${spaces[12]};
`;
