import styled from 'styled-components';
import colors from '../../constants/colors';
import radius from '../../constants/radius';
import shadows from '../../constants/shadows';
import spaces from '../../constants/spaces';

interface CategoryItemProps {
  isSelected: boolean;
}

export const Layout = styled.div`
  display: flex;
`;

export const CategoryItem = styled.div<CategoryItemProps>`
  margin-right: ${spaces[48]};
  cursor: pointer;
  padding: ${spaces[12]};
  height: ${spaces[40]};
  color: ${colors.dark[60]};

  :hover {
    color: ${colors.dark[100]};
  }

  ${({ isSelected }: CategoryItemProps) =>
    isSelected &&
    `
    background: white;
    box-shadow: ${shadows.level2};
    border-radius: ${radius[6]};
    color: ${colors.dark[100]};
  `}
`;
