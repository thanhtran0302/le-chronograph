import styled from 'styled-components';
import spaces from '../../../constants/spaces';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${spaces[48]};
  grid-row-gap: ${spaces[16]};
  margin-top: ${spaces[16]};
`;
