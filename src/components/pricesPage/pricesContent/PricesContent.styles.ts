import styled from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import spaces from '../../../constants/spaces';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${spaces[48]};
  grid-row-gap: ${spaces[16]};
  margin-top: ${spaces[16]};

  @media (max-width: ${breakpoints.smartphone.iPhone11ProMax}) {
    display: flex;
    flex-direction: column;
  }
`;
