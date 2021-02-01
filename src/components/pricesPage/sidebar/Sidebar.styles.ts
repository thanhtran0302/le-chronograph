import styled from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import colors from '../../../constants/colors';
import radius from '../../../constants/radius';
import spaces from '../../../constants/spaces';

export const Layout = styled.div`
  border-right: 1px solid ${colors.grey[100]};

  @media (min-width: ${breakpoints.smartphone.iPhone11ProMax}) {
    width: 400px;
    max-width: 400px;
  }
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${spaces[16]};
  margin-bottom: ${spaces[32]};
  cursor: pointer;
  transition: 0.5s;

  :hover {
    svg {
      background: ${colors.grey[60]};
      transition: 0.5s;
      border-radius: ${radius[6]};
    }
  }
`;

export const RetourText = styled.div`
  margin-left: ${spaces[8]};
`;

export const LinkWrapper = styled.div`
  & + & {
    margin-top: ${spaces[8]};
  }

  a {
    color: ${colors.mainDark};
  }
`;
