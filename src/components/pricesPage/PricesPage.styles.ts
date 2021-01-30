import styled from 'styled-components';
import colors from '../../constants/colors';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  display: flex;
`;

export const Content = styled.div`
  padding: ${spaces[32]};
  flex: 1;
`;

export const RedSpan = styled.span`
  color: ${colors.red};
  font-weight: 700;
`;

export const WordingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div``;

export const DateContainer = styled.div``;
