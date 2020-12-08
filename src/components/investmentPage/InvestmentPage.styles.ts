import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import spaces from '../../constants/spaces';

export const NewsletterLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.mainDark};
  padding: ${spaces[32]} ${spaces[24]};
`;

export const NewsletterWrapper = styled.div`
  margin: auto;
  margin-top: ${spaces[24]};
  max-width: 700px;
`;

export const Title = styled.div`
  ${paragraphs.h1};
  margin: auto;

  @media (max-width: ${breakpoints.smartphone.iPhone11ProMax}) {
    ${paragraphs.h3};
  }
`;
