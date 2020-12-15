import React, { FC, Dispatch, SetStateAction } from 'react';
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

interface NavBarItemsProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const NavBarItems: FC<NavBarItemsProps> = ({ setOpen }) => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <Link href={'/investissement'}>
        <NavigationItem onClick={() => setOpen(false)}>
          {t('investment')}
        </NavigationItem>
      </Link>
      <Link href={'/histoire'}>
        <NavigationItem onClick={() => setOpen(false)}>
          {t('history')}
        </NavigationItem>
      </Link>
      <Link href={'/marketing'}>
        <NavigationItem onClick={() => setOpen(false)}>
          {t('marketing')}
        </NavigationItem>
      </Link>
      <Link href={'/blog'}>
        <NavigationItem onClick={() => setOpen(false)}>
          {t('blog')}
        </NavigationItem>
      </Link>
      <Link href={'/lechronograph-inside'}>
        <NavigationItem onClick={() => setOpen(false)}>
          {t('leChronographInside')}
        </NavigationItem>
      </Link>
      <ListenPodcastButtonWrapper onClick={() => setOpen(false)}>
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
