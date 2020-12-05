import styled from 'styled-components';
import paragraphs from '../../../constants/paragraphs';
import spaces from '../../../constants/spaces';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${spaces[24]};
  grid-row-gap: ${spaces[24]};
`;

export const ItemWrapper = styled.div`
  ${paragraphs.body1};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.div`
  text-align: center;
`;
