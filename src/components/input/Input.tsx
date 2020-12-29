import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import { ComponentAppearance } from '../button/Button';
import { Layout, InputLayout } from './Input.styles';

export enum InputTypes {
  TEXT = 'text',
  PASSWORD = 'password',
  TEL = 'tel',
  NUMBER = 'number',
  EMAIL = 'email'
}

export interface OwnProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type: InputTypes;
  appearance: ComponentAppearance;
  value?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  hasError?: boolean;
  dataTest?: string;
}

const Input: FC<OwnProps> = ({
  value,
  label,
  id,
  dataTest,
  appearance,
  ...rest
}) => (
  <Layout data-test={dataTest ? dataTest : `input-${id}`}>
    <InputLayout
      id={id}
      {...rest}
      placeholder={label}
      appearance={appearance}
    />
  </Layout>
);

export default Input;
