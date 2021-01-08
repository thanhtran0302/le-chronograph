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
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <Layout>
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
