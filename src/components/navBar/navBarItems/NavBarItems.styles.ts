import styled, { css } from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import colors from '../../../constants/colors';
import paragraphs from '../../../constants/paragraphs';
import spaces from '../../../constants/spaces';
import { ComponentAppearance } from '../../button/Button';

export const Layout = styled.div`
  @media (min-width: ${breakpoints[960]}) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export interface BorderOnHoverProps {
  appearance: ComponentAppearance;
}

export const NavigationItem = styled.div`
  ${paragraphs.subtitle};
  font-weight: 700;
  cursor: pointer;

  @media (min-width: ${breakpoints[960]}) {
    margin-right: ${spaces[32]};
  }

  @media (max-width: ${breakpoints[960]}) {
    padding: ${spaces[12]};
    border-top: 2px solid ${colors.mainDark};
  }

  ::after {
    display: block;
    content: '';
    border-bottom: 2px solid ${colors.mainDark};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  :hover {
    ::after {
      transform: scaleX(1);
    }
  }
`;
