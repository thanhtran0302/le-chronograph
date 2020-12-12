import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, {
  ButtonTypes,
  ComponentAppearance,
  ButtonIconPosition
} from '../../button/Button';
import {
  Layout,
  NavigationItem,
  ListenPodcastButtonWrapper
} from './NavBarItems.styles';
import Micro from '../../../assets/icons/micro.svg';
import Link from 'next/link';
import { APPLE_PODCAST } from '../../../constants/common';

const NavBarItems: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <Link href={'/investissement'}>
        <NavigationItem>{t('investment')}</NavigationItem>
      </Link>
      <Link href={'/histoire'}>
        <NavigationItem>{t('history')}</NavigationItem>
      </Link>
      <Link href={'/marketing'}>
        <NavigationItem>{t('marketing')}</NavigationItem>
      </Link>
      <Link href={'/blog'}>
        <NavigationItem>{t('blog')}</NavigationItem>
      </Link>
      <Link href={'/lechronograph-inside'}>
        <NavigationItem>{t('leChronographInside')}</NavigationItem>
      </Link>
      <ListenPodcastButtonWrapper>
        <a href={APPLE_PODCAST} target="_blank">
          <Button
            label={t('listenToPodcast')}
            type={ButtonTypes.BUTTON}
            appearance={ComponentAppearance.PRIMARY}
            icon={<Micro />}
            iconPosition={ButtonIconPosition.LEFT}
          />
        </a>
      </ListenPodcastButtonWrapper>
    </Layout>
  );
};

export default NavBarItems;
