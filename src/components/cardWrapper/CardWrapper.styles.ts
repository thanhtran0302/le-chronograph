import styled from 'styled-components';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  margin-top: 56px; //tmp
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: ${spaces[32]};
  grid-row-gap: ${spaces[32]};
`;
