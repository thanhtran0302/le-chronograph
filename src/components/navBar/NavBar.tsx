import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { BlogLabel, BlogName, PODCAST_URL } from '../../constants/common';
import {
  useMobileDevice,
  useSmartphoneDevice
} from '../../constants/responsive';
import Button, { ButtonAppearance, ButtonTypes } from '../button/Button';
import {
  Layout,
  UnitedFor,
  Blog,
  BlogTitle,
  ButtonsContainer
} from './NavBar.styles';

interface NavBarProps {
  openModal(): void;
}

const NavBar: FC<NavBarProps> = ({ openModal }) => {
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
          onClick={() => openModal()}
        />
        <a target="_blank" href={PODCAST_URL}>
          <Button
            type={ButtonTypes.BUTTON}
            appearance={ButtonAppearance.PRIMARY}
            label={t('listenToPodcast')}
          />
        </a>
      </ButtonsContainer>
    </Layout>
  );
};

export default NavBar;
