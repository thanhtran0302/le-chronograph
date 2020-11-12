import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { BlogLabel, BlogName } from '../../constants/common';
import Button, { ButtonAppearance, ButtonTypes } from '../button/Button';
import {
  Layout,
  UnitedFor,
  Blog,
  BlogTitle,
  ButtonsContainer
} from './NavBar.styles';

const NavBar: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <Link href="/">
        <BlogTitle>
          <UnitedFor>{BlogName}</UnitedFor>
          <Blog>{BlogLabel}</Blog>
        </BlogTitle>
      </Link>
      <ButtonsContainer>
        <Button
          type={ButtonTypes.BUTTON}
          appearance={ButtonAppearance.SECONDARY}
          label={t('newsletterSignUp')}
        />
        <Button
          type={ButtonTypes.BUTTON}
          appearance={ButtonAppearance.PRIMARY}
          label={t('listenToPodcast')}
        />
      </ButtonsContainer>
    </Layout>
  );
};

export default NavBar;
