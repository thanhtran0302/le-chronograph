import styled from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import spaces from '../../../constants/spaces';

export const Layout = styled.div`
  padding-top: ${spaces[48]};
  margin: auto;

  @media (max-width: ${breakpoints.tablet.iPadPro11}) {
    padding: ${spaces[24]};
  }

  @media (min-width: ${breakpoints.tablet.iPadPro11}) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: ${spaces[24]};
    grid-column-gap: ${spaces[80]};
    max-width: ${breakpoints.desktop.macBookPro};
  }
`;
