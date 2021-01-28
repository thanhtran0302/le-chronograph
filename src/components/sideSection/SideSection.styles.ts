import styled from 'styled-components';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  display: inline-block;
  background: ${colors.red};
  padding: ${spaces[4]} ${spaces[16]};
  border-top-right-radius: ${radius[6]};
  border-bottom-right-radius: ${radius[6]};
  color: ${colors.mainLight};
  text-transform: uppercase;
  ${paragraphs.subtitle_small};
  font-weight: 700;
`;

export const Children = styled.div`
  display: block;
  margin: ${spaces[16]} 0;
  padding-left: ${spaces[16]};
`;
