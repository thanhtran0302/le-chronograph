import styled from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import paragraphs from '../../../constants/paragraphs';
import shadows from '../../../constants/shadows';
import spaces from '../../../constants/spaces';

export const Layout = styled.div`
  padding: ${spaces[24]} 0;
  max-width: ${breakpoints[1200]};
  margin: auto;
`;

export const CategoriesContainer = styled.div``;

export const Category = styled.div`
  ${paragraphs.body1};
  display: inline-block;
  cursor: pointer;
  padding: ${spaces[4]};
  margin-left: ${spaces[24]};

  box-shadow: ${shadows.level1}; // only selected
  // font-weight: 600; // only selected and hover

  :hover {
    font-weight: 600;
  }
`;
