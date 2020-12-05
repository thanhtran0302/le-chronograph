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
  EmailError,
  EmailSuccess,
  InputButtonWrapper,
  Layout,
  NewsletterSubtitle
} from './NewsletterContent.styles';
import Loader from '../loader/Loader';

enum QuantumState {
  TRUE,
  FALSE,
  BOTH
}

interface NewsletterContentProps {
  appearance: ComponentAppearance;
  hasSubtitle?: boolean;
  shouldCheckNewsletter?: boolean;
  shouldCheckInvestment?: boolean;
}

const NewsletterContent: FC<NewsletterContentProps> = ({
  appearance,
  hasSubtitle = false,
  shouldCheckInvestment = true,
  shouldCheckNewsletter = true
}) => {
  const { t }: UseTranslationResponse = useTranslation();
  const [isEnougWidth, setEnougWidth] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isNewsletterChecked, setNewsletterCheck] = useState<boolean>(
    shouldCheckNewsletter
  );
  const [isInvestmentChecked, setInvestmentCheck] = useState<boolean>(
    shouldCheckInvestment
  );
  const [emailSubmit, setEmailSubmit] = useState<QuantumState>(
    QuantumState.BOTH
  );
  const [atLeastOneBoxChecked, setOneBoxCheck] = useState<boolean>(
    isNewsletterChecked || isInvestmentChecked
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
      if (atLeastOneBoxChecked) {
        console.log({ atLeastOneBoxChecked });
        try {
          await fetch(`/api/airtable`, {
            method: 'POST',
            body: JSON.stringify({
              email,
              newsletter: isNewsletterChecked,
              investment: isInvestmentChecked
            })
          });
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
        setOneBoxCheck(false);
        setLoading(false);
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
      {isLoading && <Loader />}
      {hasSubtitle && (
        <NewsletterSubtitle>{t('newsletterFooter')}</NewsletterSubtitle>
      )}
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
            type={ButtonTypes.SUBMIT}
            label={t('newsletterSignUp')}
          />
        )}
      </InputButtonWrapper>
      {isEnougWidth && (
        <ButtonWrapper>
          <Button
            appearance={appearance}
            type={ButtonTypes.SUBMIT}
            label={t('newsletterSignUp')}
          />
        </ButtonWrapper>
      )}
      <CheckboxesWrapper>
        <Checkbox
          label={t('newsletter')}
          onClick={check => {
            setNewsletterCheck(check);
            setOneBoxCheck(isInvestmentChecked || check);
          }}
          appearance={appearance}
          check={isNewsletterChecked}
        />
        <Checkbox
          label={t('investment')}
          onClick={check => {
            setInvestmentCheck(check);
            setOneBoxCheck(isNewsletterChecked || check);
          }}
          appearance={appearance}
          check={isInvestmentChecked}
        />
      </CheckboxesWrapper>
      <div>
        {emailSubmit === QuantumState.TRUE && (
          <EmailSuccess>{t('successEmail')}</EmailSuccess>
        )}
        {emailSubmit === QuantumState.FALSE && (
          <EmailError>{t('invalidEmail')}</EmailError>
        )}
        {!atLeastOneBoxChecked && (
          <EmailError>{t('atLeastOneBoxCheck')}</EmailError>
        )}
      </div>
    </Layout>
  );
};

export default NewsletterContent;
