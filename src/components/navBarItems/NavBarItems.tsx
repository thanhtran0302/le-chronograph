import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, {
  ButtonTypes,
  ButtonAppearance,
  ButtonIconPosition
} from '../button/Button';
import { Layout, NavigationItem } from './NavBarItems.styles';
import Micro from '../../assets/icons/micro.svg';
import breakpoints from '../../constants/breakpoints';
import { useMediaQuery } from '../../constants/responsive';

const NavBarItems: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const isMobile: boolean = useMediaQuery(`(max-width: ${breakpoints[1200]})`);

  return (
    <Layout>
      <NavigationItem>{t('newsletter')}</NavigationItem>
      <NavigationItem>{t('investment')}</NavigationItem>
      <NavigationItem>{t('blog')}</NavigationItem>
      <NavigationItem>{t('about')}</NavigationItem>
      <NavigationItem>
        {!isMobile ? (
          <Button
            label={t('listenToPodcast')}
            type={ButtonTypes.BUTTON}
            appearance={ButtonAppearance.PRIMARY}
            icon={<Micro />}
            iconPosition={ButtonIconPosition.LEFT}
          />
        ) : (
          t('listenToPodcast')
        )}
      </NavigationItem>
    </Layout>
  );
};

export default NavBarItems;
