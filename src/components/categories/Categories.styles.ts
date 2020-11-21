import styled, { css } from 'styled-components';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import radius from '../../constants/radius';
import shadows from '../../constants/shadows';
import spaces from '../../constants/spaces';

interface CategoryItemProps {
  isSelected: boolean;
  isMobile: boolean;
}

export const Layout = styled.div`
  display: flex;
`;

export const CategoryItem = styled.div<CategoryItemProps>`
  ${paragraphs.body1};
  cursor: pointer;
  padding: ${spaces[12]};
  height: ${spaces[40]};
  color: ${colors.dark[80]};
  text-transform: capitalize;

  :hover {
    color: ${colors.dark[100]};
  }

  ${({ isMobile }: CategoryItemProps) =>
    isMobile
      ? css`
          margin-right: ${spaces[16]};
        `
      : css`
          margin-right: ${spaces[48]};
        `}

  ${({ isSelected }: CategoryItemProps) =>
    isSelected &&
    `
    background: white;
    box-shadow: ${shadows.level2};
    border-radius: ${radius[6]};
    color: ${colors.dark[100]};
  `}
`;
