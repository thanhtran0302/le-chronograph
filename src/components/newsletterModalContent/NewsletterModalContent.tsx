import React, {
  ChangeEvent,
  FC,
  FormEvent,
  Fragment,
  useState,
  MouseEvent
} from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, { ButtonTypes, ButtonAppearance } from '../button/Button';
import Input, { InputTypes } from '../input/Input';
import {
  Layout,
  EmailError,
  EmailSuccess,
  NewsletterTitle,
  ContentWrapper
} from './NewsletterModalContent.styles';
import Loader from '../loader/Loader';
import { isEmail } from '../../utils/global';
import * as gtag from '../../utils/ga';

enum QuantumState {
  TRUE,
  FALSE,
  BOTH
}

const NewsletterModalContent: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [emailSubmit, setEmailSubmit] = useState<QuantumState>(
    QuantumState.BOTH
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setEmail(value);
  };

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    gtag.event({
      action: 'NEWSLETTER_SIGN_UP',
      category: 'CLICK',
      label: email,
      value: 2
    });
  };

  const onSubmit = async (event: FormEvent<Element>) => {
    event.preventDefault();
    setLoading(true);

    if (isEmail(email)) {
      try {
        await fetch(`/api/airtable/${email}`);
        setLoading(false);
        setEmailSubmit(QuantumState.TRUE);
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
    <Fragment>
      {isLoading && <Loader text={t('savingEmail')} />}
      <NewsletterTitle>{t('receiveTips')}</NewsletterTitle>
      <Layout onSubmit={onSubmit}>
        <ContentWrapper>
          <Input
            type={InputTypes.EMAIL}
            id={'email'}
            label={t('inputEmailLabel')}
            value={email}
            placeholder={t('emailPlaceholder')}
            onChange={onChange}
            required
          />
          <Button
            onClick={onClick}
            type={ButtonTypes.SUBMIT}
            appearance={ButtonAppearance.PRIMARY}
            label={t('newsletterSignUp')}
          />
        </ContentWrapper>
      </Layout>
      {emailSubmit === QuantumState.FALSE && (
        <EmailError>{t('invalidEmail')}</EmailError>
      )}
      {emailSubmit === QuantumState.TRUE && (
        <EmailSuccess>{t('successEmail')}</EmailSuccess>
      )}
    </Fragment>
  );
};

export default NewsletterModalContent;
