import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useSmartphoneDevice } from '../../constants/responsive';
import { isEmail } from '../../utils/global';
import Button, { ButtonTypes, ComponentAppearance } from '../button/Button';
import Input, { InputTypes } from '../input/Input';
import Loader from '../loader/Loader';
import {
  Container,
  Description,
  FormContainer,
  GreenSpanText,
  Layout,
  RedSpanText,
  Subtitle,
  SvgContainer,
  Title,
  TitleContainer,
  Image
} from './NewsletterPage.styles';
import IPhoneNewsletter from '../../assets/images/iPhone-newsletter.png';
import BgRight from '../../assets/icons/bg-right.svg';

const NewsletterPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const isMobile: boolean = useSmartphoneDevice();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { value } = event.target;
    setEmail(value);
  };

  const onSubmit = async (event: FormEvent<Element>) => {
    event.preventDefault();

    setSuccess(false);
    setError(false);
    setLoading(true);
    if (isEmail(email)) {
      try {
        await fetch(`/api/airtable`, {
          method: 'POST',
          body: JSON.stringify({
            email
          })
        });
        setSuccess(true);
        setError(false);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        setSuccess(false);
        throw error;
      }
    }
  };

  return (
    <Layout>
      {isLoading && <Loader />}
      <Container>
        <TitleContainer>
          <Title>Le Chronograph</Title>
        </TitleContainer>
        <Subtitle>
          Être au courant de toutes les actualités sur l'horlogerie
          <br />
          en seulement <RedSpanText>5 minutes</RedSpanText>
        </Subtitle>
        <Description>
          Vous recevez les informations importantes concernant le monde de
          l'horlogerie directement dans{' '}
          <RedSpanText>votre boîte mail</RedSpanText>. Restez informé{' '}
          <RedSpanText>gratuitement</RedSpanText>.
        </Description>
        <FormContainer onSubmit={onSubmit}>
          <Input
            id="email"
            appearance={ComponentAppearance.SECONDARY}
            type={InputTypes.EMAIL}
            label={'Votre e-mail'}
            value={email}
            onChange={onChange}
            required
          />
          <Button
            appearance={ComponentAppearance.CTA}
            type={ButtonTypes.SUBMIT}
            label={"Je m'inscris"}
          />
        </FormContainer>
        <div>
          {isSuccess && (
            <GreenSpanText>Merci pour votre inscription</GreenSpanText>
          )}
          {isError && (
            <RedSpanText>
              Une erreur est survenue. Veuillez ré-essayer.
            </RedSpanText>
          )}
        </div>
      </Container>
      <Container>
        {!isMobile && (
          <SvgContainer>
            <BgRight />
          </SvgContainer>
        )}
        <Image>
          <img src={IPhoneNewsletter} />
        </Image>
      </Container>
    </Layout>
  );
};

export default NewsletterPage;
