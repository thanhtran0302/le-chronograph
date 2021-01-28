import styled from 'styled-components';
import colors from '../../../constants/colors';
import radius from '../../../constants/radius';
import spaces from '../../../constants/spaces';

export const Layout = styled.div`
  width: 400px;
  max-width: 400px;
  border-right: 1px solid ${colors.grey[100]};
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
