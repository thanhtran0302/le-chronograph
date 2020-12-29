import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  max-width: ${breakpoints[1200]};
  margin: auto;
  margin-top: ${spaces[32]};
`;
