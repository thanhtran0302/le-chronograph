import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';

export const RedSpan = styled.span`
  color: ${colors.red};
  font-weight: 700;
`;

export const WordingContainer = styled.div`
  @media (min-width: ${breakpoints.smartphone.iPhone11ProMax}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TitleContainer = styled.div``;

export const DateContainer = styled.div``;
