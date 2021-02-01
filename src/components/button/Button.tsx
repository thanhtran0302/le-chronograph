import React, {
  FC,
  MouseEvent,
  ButtonHTMLAttributes,
  ReactElement
} from 'react';
import radius from '../../constants/radius';
import { ButtonLayout } from './Button.styles';

export enum ButtonTypes {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button'
}

export enum ComponentAppearance {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  CTA = 'cta'
}

export enum ButtonIconPosition {
  LEFT = 'left',
  RIGHT = 'right'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonTypes;
  appearance: ComponentAppearance;
  form?: string;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
  label?: string;
  icon?: ReactElement<Element>;
  iconPosition?: ButtonIconPosition;
  width?: string;
}

const Button: FC<ButtonProps> = ({
  icon,
  label,
  type,
  onClick,
  form = radius[6],
  ...rest
}) => (
  <ButtonLayout
    data-test={`button-${rest.appearance}`}
    type={type}
    onClick={onClick}
    form={form}
    {...rest}
  >
    {icon && icon}
    {label && <span>{label}</span>}
  </ButtonLayout>
);

export default Button;
