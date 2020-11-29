import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  @media (min-width: ${breakpoints[1200]}) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const NavigationItem = styled.div`
  ${paragraphs.subtitle};
  font-weight: 700;
  cursor: pointer;

  @media (min-width: ${breakpoints[1200]}) {
    margin-left: ${spaces[12]};
  }

  @media (max-width: ${breakpoints[1200]}) {
    padding: ${spaces[12]};
    border-top: 2px solid ${colors.mainDark};
  }
`;
