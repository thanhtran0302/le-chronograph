import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, { ButtonTypes, ComponentAppearance } from '../button/Button';
import Input, { InputTypes } from '../input/Input';
import { isEmail } from '../../utils/global';
import * as gtag from '../../utils/ga';
import Checkbox from '../checkbox/Checkbox';
import {
  ButtonWrapper,
  CheckboxesWrapper,
  InputButtonWrapper,
  Layout
} from './NewsletterContent.styles';

enum QuantumState {
  TRUE,
  FALSE,
  BOTH
}

interface NewsletterContentProps {
  appearance: ComponentAppearance;
}

const NewsletterContent: FC<NewsletterContentProps> = ({ appearance }) => {
  const { t }: UseTranslationResponse = useTranslation();
  const [isEnougWidth, setEnougWidth] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isNewsletterChecked, setNewsletterCheck] = useState<boolean>(true);
  const [isInvestmentChecked, setInvestmentCheck] = useState<boolean>(true);
  const [emailSubmit, setEmailSubmit] = useState<QuantumState>(
    QuantumState.BOTH
  );
  const currentRef = useRef<HTMLFormElement | null>(null);

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

  useEffect(() => {
    setEnougWidth(currentRef.current.offsetWidth < 414);
  }, []);

  return (
    <Layout onSubmit={onSubmit} ref={currentRef}>
      <InputButtonWrapper>
        <Input
          label={t('inputEmailLabel')}
          id={'e-mail'}
          type={InputTypes.EMAIL}
          value={email}
          onChange={onChange}
          appearance={appearance}
          required
        />
        {!isEnougWidth && (
          <Button
            appearance={appearance}
            type={ButtonTypes.BUTTON}
            label={t('newsletterSignUp')}
          />
        )}
      </InputButtonWrapper>
      {isEnougWidth && (
        <ButtonWrapper>
          <Button
            appearance={appearance}
            type={ButtonTypes.BUTTON}
            label={t('newsletterSignUp')}
          />
        </ButtonWrapper>
      )}
      <CheckboxesWrapper>
        <Checkbox
          label={t('newsletter')}
          onClick={check => setNewsletterCheck(check)}
          appearance={appearance}
          check={isNewsletterChecked}
        />
        <Checkbox
          label={t('investment')}
          onClick={check => setInvestmentCheck(check)}
          appearance={appearance}
          check={isInvestmentChecked}
        />
      </CheckboxesWrapper>
    </Layout>
  );
};

export default NewsletterContent;
