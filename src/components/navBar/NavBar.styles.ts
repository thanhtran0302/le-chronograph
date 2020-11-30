import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import radius from '../../constants/radius';
import shadows from '../../constants/shadows';
import spaces from '../../constants/spaces';

export const MasterLayout = styled.div``;

export const Layout = styled.div`
  color: ${colors.mainDark};
  background: ${colors.mainLight};
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: ${breakpoints[960]}) {
    justify-content: space-between;
    margin: auto;
    width: 100%;
    padding: ${spaces[24]};
  }

  @media (max-width: ${breakpoints[960]}) {
    padding: ${spaces[16]} ${spaces[16]};
    justify-content: space-between;
  }
`;

export const WebsiteName = styled.div`
  ${paragraphs.h3};
`;

export const NavigationContainer = styled.div`
  @media (min-width: ${breakpoints[960]}) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const NavigationItem = styled.div`
  ${paragraphs.subtitle};
  font-weight: 700;
  margin-left: ${spaces[12]};
  cursor: pointer;
`;
