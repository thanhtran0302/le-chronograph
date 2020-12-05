import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import spaces from '../../constants/spaces';

export const NewsletterLayout = styled.div`
  color: ${colors.mainDark};
  text-align: center;
  padding: ${spaces[32]} ${spaces[24]};
`;

export const NewsletterWrapper = styled.div`
  margin: auto;
  margin-top: ${spaces[24]};
  max-width: 700px;
`;

export const Title = styled.div`
  ${paragraphs.h1};

  @media (max-width: ${breakpoints.smartphone.iPhone11ProMax}) {
    ${paragraphs.h3};
  }
`;
