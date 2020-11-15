import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import radius from '../../constants/radius';
import shadows from '../../constants/shadows';
import colors from '../../constants/colors';
import spaces from '../../constants/spaces';

import { ButtonProps, ButtonAppearance, ButtonIconPosition } from './Button';
import fonts from '../../constants/fonts';

type ButtonLayoutProps = Pick<
  ButtonProps,
  'appearance' | 'iconPosition' | 'width'
>;

export const commonStyle: FlattenSimpleInterpolation = css`
  transition: background-color 0.2s ease-in, border 0.2s ease-in,
    color 0.2s ease-in;

  :disabled {
    color: ${colors.dark[60]};
    background: ${colors.grey[60]};
    border: 2px solid ${colors.grey[40]};
    cursor: not-allowed;
  }
`;

export const secondaryStyle: FlattenSimpleInterpolation = css`
  ${commonStyle};
  border: 2px solid ${colors.dark[100]};
  color: ${colors.dark[100]};
  background: transparent;

  svg {
    path {
      fill: ${colors.dark[100]};
    }
  }
`;

export const primaryStyle: FlattenSimpleInterpolation = css`
  ${commonStyle};
  color: white;
  background: ${colors.dark[100]};
  border: 2px solid ${colors.dark[100]};

  svg {
    path {
      fill: ${colors.dark[60]};
    }
  }

  :active {
    border: 2px solid ${colors.dark[60]};
  }
`;

const pickButtonStyle = (
  appearance: ButtonAppearance
): FlattenSimpleInterpolation => {
  switch (appearance) {
    case ButtonAppearance.PRIMARY:
      return primaryStyle;
    case ButtonAppearance.SECONDARY:
      return secondaryStyle;
    default:
      return primaryStyle;
  }
};

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  display: flex;
  align-items: center;
  border: 0;
  text-align: left;
  border-radius: ${radius[6]};
  font-size: ${fonts[14]};
  line-height: ${spaces[20]};
  font-weight: bold;
  height: ${spaces[48]};
  padding: ${spaces[4]} ${spaces[12]};
  cursor: pointer;

  ${(props: ButtonLayoutProps) =>
    css`
      width: ${props.width};
    `}

  ${(props: Pick<ButtonLayoutProps, 'iconPosition'>) =>
    props.iconPosition === ButtonIconPosition.LEFT
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: row-reverse;
        `}

  svg {
    width: 32px;
    height: 32px;

    ${(props: Pick<ButtonLayoutProps, 'iconPosition'>) =>
      props.iconPosition === ButtonIconPosition.LEFT
        ? css`
            margin-right: ${spaces[8]};
          `
        : css`
            margin-left: ${spaces[8]};
          `}
  }

  :not(:disabled) {
    box-shadow: ${shadows.level1};
  }

  :active {
    box-shadow: unset;
  }

  :active,
  :focus {
    outline: none;
  }

  ${({ appearance }: Pick<ButtonLayoutProps, 'appearance'>) =>
    pickButtonStyle(appearance)}
`;
