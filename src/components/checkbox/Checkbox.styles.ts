import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';
import { ComponentAppearance } from '../button/Button';
import { CheckboxProps } from './Checkbox';

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-right: ${spaces[8]};
`;

export const primaryStyle: FlattenSimpleInterpolation = css`
  border: 2px solid ${colors.mainLight};
`;

export const secondaryStyle: FlattenSimpleInterpolation = css`
  border: 2px solid ${colors.mainDark};
`;

const pickCheckboxStyle = (
  appearance: ComponentAppearance
): FlattenSimpleInterpolation => {
  switch (appearance) {
    case ComponentAppearance.PRIMARY:
      return primaryStyle;
    case ComponentAppearance.SECONDARY:
      return secondaryStyle;
    default:
      return primaryStyle;
  }
};

export const CheckboxLayout = styled.div<Partial<CheckboxProps>>`
  border-radius: ${radius[3]};
  height: ${spaces[24]};
  width: ${spaces[24]};
  border-radius: ${radius[3]};

  ${({ appearance }: Partial<CheckboxProps>) => pickCheckboxStyle(appearance)}

  svg {
    transform: translate(2px, 0px);
    width: ${spaces[16]};
    height: ${spaces[16]};
  }
`;

export const LabelLayout = styled.div`
  ${paragraphs.body1};
  margin-left: ${spaces[8]};
`;
