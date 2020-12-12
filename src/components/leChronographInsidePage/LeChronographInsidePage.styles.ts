import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import paragraphs from '../../constants/paragraphs';
import spaces from '../../constants/spaces';

export const BulletListWrapper = styled.div`
  ${paragraphs.body1};
  max-width: ${breakpoints.tablet.iPadMini};
  margin: auto;
  text-align: left;
`;

export const BulletListTitle = styled.div`
  font-weight: 600;
  margin-top: ${spaces[24]};
`;
