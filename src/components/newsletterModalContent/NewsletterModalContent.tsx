import React, { ChangeEvent, FC, FormEvent, Fragment, useState } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, { ButtonTypes, ButtonAppearance } from '../button/Button';
import Input, { InputTypes } from '../input/Input';
import {
  Layout,
  EmailError,
  EmailSuccess
} from './NewsletterModalContent.styles';
import isEmail from 'isemail';

const NewsletterModalContent: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [hasError, setEmailError] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setEmail(value);
  };
  const onSubmit = async (event: FormEvent<Element>) => {
    event.preventDefault();

    if (isEmail.validate(email)) {
      try {
        await fetch(`/api/airtable/${email}`);
        setSuccess(true);
        setEmailError(false);
        setEmail('');
      } catch (error) {
        setSuccess(false);
        setEmailError(true);
        throw error;
      }
    } else {
      setEmailError(true);
      setSuccess(false);
    }
  };

  return (
    <Fragment>
      <Layout onSubmit={onSubmit}>
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
          type={ButtonTypes.SUBMIT}
          appearance={ButtonAppearance.PRIMARY}
          label={t('newsletterSignUp')}
        />
      </Layout>
      {hasError && <EmailError>{t('invalidEmail')}</EmailError>}
      {isSuccess && <EmailSuccess>{t('successEmail')}</EmailSuccess>}
    </Fragment>
  );
};

export default NewsletterModalContent;
