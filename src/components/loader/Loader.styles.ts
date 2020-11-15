import styled, { css } from 'styled-components';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';

import { LoaderProps } from './Loader';

export const loaderAnimation = css`
  animation: loader-spin 1s infinite linear;

  @keyframes loader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderContainer = styled.div<Pick<LoaderProps, 'isWrapped'>>`
  background: rgba(255, 255, 255, 0.85);

  ${({ isWrapped }) =>
    !isWrapped &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
    `}
`;

export const LoaderRing = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.2);
  border-left-color: ${colors.dark[100]};
  border-radius: ${radius.rounded};
  width: 100px;
  height: 100px;

  ${loaderAnimation}
`;

export const LoaderRingContainer = styled.div<Pick<LoaderProps, 'isWrapped'>>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ isWrapped }) =>
    !isWrapped &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 300px;
      transform: translate(-50%, -50%);
    `}
`;

export const LoaderTextLayout = styled.div`
  font-size: ${fonts[16]};
  color: ${colors.dark[80]};
  font-weight: bold;
  margin-top: ${spaces[24]};
  text-align: center;
`;
