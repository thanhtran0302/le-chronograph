import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  background: ${colors.mainDark};
  padding: ${spaces[100]} 0;
  text-align: center;
  color: ${colors.mainLight};

  @media (max-width: ${breakpoints[1050]}) {
    padding: ${spaces[72]} 0;
  }

  @media (max-width: ${breakpoints[960]}) {
    padding: ${spaces[24]};
  }
`;

export const Title = styled.div`
  ${paragraphs.h1};

  @media (max-width: ${breakpoints[1050]}) {
    ${paragraphs.h2};
  }

  @media (max-width: ${breakpoints[480]}) {
    ${paragraphs.h3};
  }
`;

export const Subtitle = styled.div`
  ${paragraphs.body1};
  margin-top: ${spaces[16]};

  @media (max-width: ${breakpoints[840]}) {
    ${paragraphs.subtitle};
  }
`;
