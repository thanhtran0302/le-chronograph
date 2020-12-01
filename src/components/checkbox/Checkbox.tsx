import React, { FC, useState } from 'react';

import { Layout, CheckboxLayout, LabelLayout } from './Checkbox.styles';
import CheckLight from '../../assets/icons/check_light.svg';
import CheckDark from '../../assets/icons/check_dark.svg';
import { ComponentAppearance } from '../button/Button';

export interface CheckboxProps {
  label: string;
  onClick(checked: boolean): void;
  appearance: ComponentAppearance;
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
          (appearance === ComponentAppearance.PRIMARY ? (
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
