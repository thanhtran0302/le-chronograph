import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import radius from '../../constants/radius';
import shadows from '../../constants/shadows';
import colors from '../../constants/colors';
import spaces from '../../constants/spaces';

import { ButtonProps, ComponentAppearance, ButtonIconPosition } from './Button';
import fonts from '../../constants/fonts';

type ButtonLayoutProps = Pick<
  ButtonProps,
  'appearance' | 'iconPosition' | 'width'
>;

export const commonStyle: FlattenSimpleInterpolation = css`
  transition: background-color 0.2s ease-in, border 0.2s ease-in,
    color 0.2s ease-in;
`;

export const secondaryStyle: FlattenSimpleInterpolation = css`
  ${commonStyle};
  border: 2px solid ${colors.mainDark};
  color: ${colors.mainDark};
  background: ${colors.mainLight};

  :hover {
    border: 2px solid ${colors.mainDark};
    color: ${colors.mainLight};
    background: ${colors.mainDark};

    path {
      fill: ${colors.mainLight};
    }
  }

  svg {
    path {
      fill: ${colors.mainDark};
    }
  }
`;

export const primaryStyle: FlattenSimpleInterpolation = css`
  ${commonStyle};
  color: ${colors.mainLight};
  background: ${colors.mainDark};
  border: 2px solid ${colors.mainLight};

  :hover {
    background: ${colors.mainLight};
    border: 2px solid ${colors.mainDark};
    color: ${colors.mainDark};

    path {
      fill: ${colors.mainDark};
    }
  }

  svg {
    path {
      fill: ${colors.mainLight};
    }
  }
`;

export const ctaStyle: FlattenSimpleInterpolation = css`
  ${commonStyle};
  background: ${colors.salmon[60]};
  border: 2px solid ${colors.salmon[60]};
  color: ${colors.mainDark};

  :hover {
    background: ${colors.salmon[100]};
    border: 2px solid ${colors.salmon[100]};
  }
`;

const pickButtonStyle = (
  appearance: ComponentAppearance
): FlattenSimpleInterpolation => {
  switch (appearance) {
    case ComponentAppearance.PRIMARY:
      return primaryStyle;
    case ComponentAppearance.SECONDARY:
      return secondaryStyle;
    case ComponentAppearance.CTA:
      return ctaStyle;
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
