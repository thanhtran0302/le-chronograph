import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import paragraphs from '../../constants/paragraphs';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: ${spaces[40]};
  max-width: ${breakpoints.desktop.macBookPro};
  margin: auto;
  padding: ${spaces[72]} ${spaces[24]};

  @media (max-width: ${breakpoints[1024]}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const FooterColumn = styled.div`
  @media (max-width: ${breakpoints[1024]}) {
    margin-bottom: ${spaces[20]};
  }
`;

export const FooterContent = styled.div``;

export const FooterItem = styled.div`
  ${paragraphs.body1};
  display: flex;
  align-items: center;
  margin: ${spaces[4]} 0;
`;

export const Title = styled.div`
  ${paragraphs.h3};
  margin-bottom: ${spaces[12]};
`;
