import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, { ButtonTypes, ButtonAppearance } from '../button/Button';
import Input, { InputAppearance, InputTypes } from '../input/Input';
import { isEmail } from '../../utils/global';
import * as gtag from '../../utils/ga';
import Checkbox, { CheckboxAppearance } from '../checkbox/Checkbox';
import {
  ButtonWrapper,
  CheckboxesWrapper,
  InputButtonWrapper,
  Layout
} from './NewsletterContent.styles';
import { useMediaQuery } from '../../constants/responsive';
import breakpoints from '../../constants/breakpoints';

enum QuantumState {
  TRUE,
  FALSE,
  BOTH
}

const NewsletterContent: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const isMobile: boolean = useMediaQuery(`(max-width: ${breakpoints[1024]})`);
  const [email, setEmail] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isNewsletterChecked, setNewsletterCheck] = useState<boolean>(true);
  const [isInvestmentChecked, setInvestmentCheck] = useState<boolean>(true);
  const [_emailSubmit, setEmailSubmit] = useState<QuantumState>(
    QuantumState.BOTH
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setEmail(value);
  };

  const onSubmit = async (event: FormEvent<Element>) => {
    event.preventDefault();
    setLoading(true);

    if (isEmail(email)) {
      try {
        await fetch(`/api/airtable/${email}`);
        setLoading(false);
        setEmailSubmit(QuantumState.TRUE);
        gtag.event({
          action: 'NEWSLETTER_SIGN_UP',
          category: 'CLICK',
          label: email,
          value: 2
        });
      } catch (error) {
        setLoading(false);
        setEmailSubmit(QuantumState.FALSE);
        throw error;
      }
    } else {
      setEmailSubmit(QuantumState.FALSE);
      setLoading(false);
    }
  };

  return (
    <Layout onSubmit={onSubmit}>
      <InputButtonWrapper>
        <Input
          label={t('inputEmailLabel')}
          id={'e-mail'}
          type={InputTypes.EMAIL}
          value={email}
          onChange={onChange}
          appearance={InputAppearance.PRIMARY}
          required
        />
        {!isMobile && (
          <Button
            appearance={ButtonAppearance.PRIMARY}
            type={ButtonTypes.BUTTON}
            label={t('newsletterSignUp')}
          />
        )}
      </InputButtonWrapper>
      {isMobile && (
        <ButtonWrapper>
          <Button
            appearance={ButtonAppearance.PRIMARY}
            type={ButtonTypes.BUTTON}
            label={t('newsletterSignUp')}
          />
        </ButtonWrapper>
      )}
      <CheckboxesWrapper>
        <Checkbox
          label={t('newsletter')}
          onClick={check => setNewsletterCheck(check)}
          appearance={CheckboxAppearance.PRIMARY}
          check={isNewsletterChecked}
        />
        <Checkbox
          label={t('investment')}
          onClick={check => setInvestmentCheck(check)}
          appearance={CheckboxAppearance.PRIMARY}
          check={isInvestmentChecked}
        />
      </CheckboxesWrapper>
    </Layout>
  );
};

export default NewsletterContent;
