import styled, { css } from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import paragraphs from '../../../constants/paragraphs';
import shadows from '../../../constants/shadows';
import spaces from '../../../constants/spaces';

interface CategoryProps {
  isSelected: boolean;
  isMobile: boolean;
}

export const Layout = styled.div`
  padding: ${spaces[12]} 0;
`;

export const Category = styled.div<CategoryProps>`
  ${paragraphs.subtitle};
  display: inline-block;
  cursor: pointer;
  padding: ${spaces[4]} ${spaces[8]};
  margin-left: ${spaces[24]};

  ${({ isSelected }: CategoryProps) =>
    isSelected &&
    css`
      box-shadow: ${shadows.level1}; // only selected
      font-weight: 600; // only selected and hover
    `}
`;
