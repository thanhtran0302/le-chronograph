import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import colors from '../../constants/colors';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';
import shadows from '../../constants/shadows';
import { InputAppearance, OwnProps } from './Input';
import fonts from '../../constants/fonts';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const primaryStyle: FlattenSimpleInterpolation = css`
  background: ${colors.mainDark};
  color: ${colors.mainLight};
  border: 2px solid ${colors.mainLight};

  ::placeholder {
    color: ${colors.mainLight};
  }
`;

export const secondaryStyle: FlattenSimpleInterpolation = css`
  background: ${colors.mainLight};
  color: ${colors.mainDark};
  border: 2px solid ${colors.mainDark};

  ::placeholder {
    color: ${colors.mainDark};
  }
`;

const pickInputAppearance = (
  appearance: InputAppearance
): FlattenSimpleInterpolation => {
  switch (appearance) {
    case InputAppearance.PRIMARY:
      return primaryStyle;
    case InputAppearance.SECONDARY:
      return secondaryStyle;
    default:
      return primaryStyle;
  }
};

export const InputLayout = styled.input<Partial<OwnProps>>`
  outline: none;
  height: ${spaces[48]};
  font-size: ${fonts[14]};
  line-height: ${spaces[24]};
  border-radius: ${radius[6]};
  box-shadow: ${shadows.level1};
  box-sizing: border-box;
  padding: 0px ${spaces[16]};
  transition: 0.5s;

  ${({ appearance }: Partial<OwnProps>) => pickInputAppearance(appearance)}
`;

export const Label = styled.label`
  display: inline-block;
  color: ${colors.dark[100]};
  font-size: ${fonts[14]};
  margin-bottom: ${spaces[8]};
`;
