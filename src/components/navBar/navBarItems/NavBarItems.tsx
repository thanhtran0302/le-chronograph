import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, {
  ButtonTypes,
  ComponentAppearance,
  ButtonIconPosition
} from '../../button/Button';
import { Layout, NavigationItem } from './NavBarItems.styles';
import Micro from '../../../assets/icons/micro.svg';
import breakpoints from '../../../constants/breakpoints';
import { useMediaQuery } from '../../../constants/responsive';
import Link from 'next/link';
import { APPLE_PODCAST } from '../../../constants/common';

const NavBarItems: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const isMobile: boolean = useMediaQuery(`(max-width: ${breakpoints[960]})`);

  return (
    <Layout>
      <Link href={'/investissement'}>
        <NavigationItem>{t('investment')}</NavigationItem>
      </Link>
      <Link href={'/blog'}>
        <NavigationItem>{t('blog')}</NavigationItem>
      </Link>
      <NavigationItem>{t('about')}</NavigationItem>
      <a href={APPLE_PODCAST} target="_blank">
        {!isMobile ? (
          <Button
            label={t('listenToPodcast')}
            type={ButtonTypes.BUTTON}
            appearance={ComponentAppearance.PRIMARY}
            icon={<Micro />}
            iconPosition={ButtonIconPosition.LEFT}
          />
        ) : (
          t('listenToPodcast')
        )}
      </a>
    </Layout>
  );
};

export default NavBarItems;
