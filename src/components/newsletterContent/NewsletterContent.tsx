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
import {
  ButtonWrapper,
  EmailError,
  EmailSuccess,
  InputButtonWrapper,
  Layout,
  NewsletterSubtitle
} from './NewsletterContent.styles';
import Loader from '../loader/Loader';

export enum QuantumState {
  TRUE,
  FALSE,
  BOTH
}

interface NewsletterContentProps {
  appearance: ComponentAppearance;
  hasSubtitle?: boolean;
}

const NewsletterContent: FC<NewsletterContentProps> = ({
  appearance,
  hasSubtitle = false
}) => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const [isEnoughWidth, setEnoughWidth] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
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
        await fetch(`/api/newsletter-registration`, {
          method: 'POST',
          body: JSON.stringify({
            email
          })
        });
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

  useEffect(() => {
    setEnoughWidth(currentRef.current.offsetWidth < 414);
  }, []);

  return (
    <Layout onSubmit={onSubmit} ref={currentRef}>
      {isLoading && <Loader />}
      {hasSubtitle && (
        <NewsletterSubtitle>{t('newsletterSubtitle')}</NewsletterSubtitle>
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
        {!isEnoughWidth && (
          <Button
            appearance={ComponentAppearance.CTA}
            type={ButtonTypes.SUBMIT}
            label={t('newsletterSignUp')}
          />
        )}
      </InputButtonWrapper>
      {isEnoughWidth && (
        <ButtonWrapper>
          <Button
            appearance={ComponentAppearance.CTA}
            type={ButtonTypes.SUBMIT}
            label={t('newsletterSignUp')}
          />
        </ButtonWrapper>
      )}
      <div>
        {emailSubmit === QuantumState.TRUE && (
          <EmailSuccess>{t('successEmail')}</EmailSuccess>
        )}
        {emailSubmit === QuantumState.FALSE && (
          <EmailError>{t('invalidEmail')}</EmailError>
        )}
      </div>
    </Layout>
  );
};

export default NewsletterContent;
