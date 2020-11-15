import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  margin-top: ${spaces[56]};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: ${spaces[32]};
  grid-row-gap: ${spaces[32]};

  @media (max-width: ${breakpoints[1440]}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
