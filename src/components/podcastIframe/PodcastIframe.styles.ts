import styled, { css } from 'styled-components';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';

interface ApplePodcastProps {
  width: number;
}

export const ApplePodcastIframe = styled.iframe<ApplePodcastProps>`
  ${({ width }: ApplePodcastProps) =>
    css`
      width: calc(${width}px - ${spaces[48]});
      height: calc(${width}px * 1.12);
      max-height: 450px;
    `}
  margin: auto;
  overflow: auto;
  border-radius: ${radius[3]};
  background: transparent;
`;
