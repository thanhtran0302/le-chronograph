import styled, { css } from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import spaces from '../../constants/spaces';
import { CommonSectionProps } from './CommonSection';

export const Layout = styled.div``;

export const Text = styled.div`
  ${paragraphs.body1};

  @media (max-width: ${breakpoints[840]}) {
    ${paragraphs.subtitle};
  }
`;

export const KnowMore = styled.div<Partial<CommonSectionProps>>`
  font-weight: 600;
  display: inline-block;
  margin-top: ${spaces[24]};
  cursor: pointer;

  ::after {
    display: block;
    content: '';
    border-bottom: 2px solid
      ${({ sectionColor }: Partial<CommonSectionProps>) =>
        sectionColor === 'dark'
          ? css`
              ${colors.mainLight}
            `
          : css`
              ${colors.mainDark}
            `};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  :hover {
    ::after {
      transform: scaleX(1);
    }
  }
`;
