import styled from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import paragraphs from '../../../constants/paragraphs';
import spaces from '../../../constants/spaces';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${spaces[24]};
  grid-row-gap: ${spaces[24]};

  @media (max-width: ${breakpoints.smartphone.iPhone11ProMax}) {
    display: flex;
    flex-direction: column;
  }
`;

export const ItemWrapper = styled.div`
  ${paragraphs.body1};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.smartphone.iPhone11ProMax}) {
    flex-direction: row;
  }
`;

export const Message = styled.div`
  text-align: center;
`;
