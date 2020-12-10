import styled, { css } from 'styled-components';
import colors from '../../../constants/colors';
import radius from '../../../constants/radius';
import spaces from '../../../constants/spaces';

interface PageItemProps {
  isSelected: boolean;
}

export const Layout = styled.div`
  padding: ${spaces[24]};
  display: flex;
`;

export const PageItem = styled.div<PageItemProps>`
  padding: ${spaces[8]};
  border: 1px solid ${colors.mainDark};
  border-radius: ${radius[3]};
  margin-right: ${spaces[8]};
  corlor: ${colors.mainDark};
  cursor: pointer;
  display: flex;
  align-items: center;

  ${({ isSelected }: PageItemProps) =>
    isSelected &&
    css`
      color: ${colors.mainLight};
      background: ${colors.mainDark};
      font-weight: 600;
    `}

  :hover {
    color: ${colors.mainLight};
    background: ${colors.mainDark};
    font-weight: 600;

    svg {
      path {
        fill: ${colors.mainLight};
      }
    }
  }
`;
