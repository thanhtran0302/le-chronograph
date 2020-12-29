import styled from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import spaces from '../../../constants/spaces';

export const Layout = styled.div`
  @media (min-width: ${breakpoints.tablet.iPadPro11}) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: ${spaces[24]};
    grid-column-gap: ${spaces[80]};
  }
`;
