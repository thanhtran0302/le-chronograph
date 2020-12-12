import React, {
  ChangeEvent,
  FC,
  FormEvent,
  Fragment,
  useEffect,
  useRef,
  useState
} from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { isEmail } from '../../../utils/global';
import Button, { ButtonTypes, ComponentAppearance } from '../../button/Button';
import Input, { InputTypes } from '../../input/Input';
import Loader from '../../loader/Loader';
import { QuantumState } from '../../newsletterContent/NewsletterContent';
import {
  EmailStateContainer,
  Layout,
  EmailSuccess,
  EmailError,
  Form
} from './LeChronographInsideNewsletter.styles';

const LeChronographInsideNewsletter: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [isEnoughWidth, setEnoughWidth] = useState<boolean>(false);
  const currentRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [emailSubmit, setEmailSubmit] = useState<QuantumState>(
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
        await fetch(`/api/airtable`, {
          method: 'POST',
          body: JSON.stringify({
            email,
            investor: true
          })
        });
        setLoading(false);
        setEmailSubmit(QuantumState.TRUE);
      } catch (error) {
        setLoading(false);
        setEmailSubmit(QuantumState.BOTH);
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
    <Layout>
      {isLoading && <Loader />}
      <Form onSubmit={onSubmit} ref={currentRef} isEnoughWidth={isEnoughWidth}>
        <Input
          label={t('inputEmailLabel')}
          id={'e-mail'}
          type={InputTypes.EMAIL}
          value={email}
          onChange={onChange}
          appearance={ComponentAppearance.PRIMARY}
          required
        />
        <Button
          appearance={ComponentAppearance.PRIMARY}
          type={ButtonTypes.SUBMIT}
          label={t('newsletterSignUp')}
        />
      </Form>
      <EmailStateContainer>
        {emailSubmit === QuantumState.TRUE && (
          <EmailSuccess>{t('successEmail')}</EmailSuccess>
        )}
        {emailSubmit === QuantumState.FALSE && (
          <EmailError>{t('invalidEmail')}</EmailError>
        )}
      </EmailStateContainer>
    </Layout>
  );
};

export default LeChronographInsideNewsletter;
