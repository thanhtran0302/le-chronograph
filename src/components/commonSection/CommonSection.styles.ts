import styled, { css } from 'styled-components';
import colors from '../../constants/colors';
import spaces from '../../constants/spaces';
import { CommonSectionProps } from './CommonSection';

export const Layout = styled.div``;

export const KnowMore = styled.div<Partial<CommonSectionProps>>`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-top: ${spaces[24]};

  svg {
    path {
      ${({ sectionColor }: Partial<CommonSectionProps>) =>
        sectionColor === 'dark'
          ? css`
              fill: ${colors.mainLight};
            `
          : css`
              fill: ${colors.mainDark};
            `}
    }
  }
`;
