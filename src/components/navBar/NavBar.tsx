import Link from 'next/link';
import React, { FC, useState } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { BlogLabel, BlogName, PODCAST_URL } from '../../constants/common';
import Button, { ButtonAppearance, ButtonTypes } from '../button/Button';
import useModal, { UseModalProps } from '../modal/Modal';
import NewsletterModalContent from '../newsletterModalContent/NewsletterModalContent';
import {
  Layout,
  UnitedFor,
  Blog,
  BlogTitle,
  ButtonsContainer
} from './NavBar.styles';

const NavBar: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const { createModal, openModal }: UseModalProps = useModal();

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
        {createModal({
          title: t('createBrandThatPeopleLove'),
          subtitle: t('receiveTipsToBuildBrand'),
          content: <NewsletterModalContent />
        })}
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
