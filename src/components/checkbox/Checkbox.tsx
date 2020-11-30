import React, { FC, useState } from 'react';

import { Layout, CheckboxLayout, LabelLayout } from './Checkbox.styles';
import CheckLight from '../../assets/icons/check_light.svg';
import CheckDark from '../../assets/icons/check_dark.svg';

export enum CheckboxAppearance {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export interface CheckboxProps {
  label: string;
  onClick(checked: boolean): void;
  appearance: CheckboxAppearance;
  check: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ label, onClick, appearance, check }) => {
  const [isChecked, setCheck] = useState<boolean>(false);

  return (
    <Layout
      onClick={() => {
        setCheck(!isChecked);
        onClick(isChecked);
      }}
    >
      <CheckboxLayout appearance={appearance}>
        {check &&
          (appearance === CheckboxAppearance.PRIMARY ? (
            <CheckLight />
          ) : (
            <CheckDark />
          ))}
      </CheckboxLayout>
      <LabelLayout>{label}</LabelLayout>
    </Layout>
  );
};

export default Checkbox;
