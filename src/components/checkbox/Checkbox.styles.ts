import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';
import { CheckboxAppearance, CheckboxProps } from './Checkbox';

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
  appearance: CheckboxAppearance
): FlattenSimpleInterpolation => {
  switch (appearance) {
    case CheckboxAppearance.PRIMARY:
      return primaryStyle;
    case CheckboxAppearance.SECONDARY:
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
    height: ${spaces[16]};
    width: ${spaces[16]};
    transform: translate(2px, -6px);
  }
`;

export const LabelLayout = styled.div`
  ${paragraphs.body1};
  margin-left: ${spaces[8]};
`;
