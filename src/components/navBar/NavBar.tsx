import Link from 'next/link';
import React, { FC, Fragment, useState } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { APPLE_PODCAST, BlogLabel, BlogName } from '../../constants/common';
import { useMobileDevice } from '../../constants/responsive';
import Button, { ButtonAppearance, ButtonTypes } from '../button/Button';
import {
  Layout,
  UnitedFor,
  Blog,
  BlogTitle,
  ButtonsContainer,
  Logo,
  MobileMeneContainer,
  MenuMobileItem
} from './NavBar.styles';
import SrcLogo from '../../assets/images/logo.png';
import Menu from '../../assets/icons/menu.svg';
import Close from '../../assets/icons/close.svg';
import AHref from '../aHref/AHref';

interface NavBarProps {
  openModal(): void;
}

const NavBar: FC<NavBarProps> = ({ openModal }) => {
  const { t }: UseTranslationResponse = useTranslation();
  const isMobile: boolean = useMobileDevice();
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Layout>
      <Link href="/">
        <BlogTitle>
          {!isMobile ? (
            <Fragment>
              <UnitedFor>{BlogName}</UnitedFor>
              <Blog>{BlogLabel}</Blog>
            </Fragment>
          ) : (
            <Logo src={SrcLogo} alt={`${BlogName} logo`} />
          )}
        </BlogTitle>
      </Link>
      <div style={{ position: 'relative' }}>
        <ButtonsContainer>
          {!isMobile ? (
            <Fragment>
              <Button
                type={ButtonTypes.BUTTON}
                appearance={ButtonAppearance.SECONDARY}
                label={t('newsletterSignUp')}
                onClick={() => openModal()}
              />
              <a target="_blank" href={APPLE_PODCAST}>
                <Button
                  type={ButtonTypes.BUTTON}
                  appearance={ButtonAppearance.PRIMARY}
                  label={t('listenToPodcast')}
                />
              </a>
            </Fragment>
          ) : !isOpen ? (
            <Menu onClick={() => setOpen(true)} />
          ) : (
            <Close onClick={() => setOpen(false)} />
          )}
        </ButtonsContainer>
        {isOpen && (
          <MobileMeneContainer>
            <MenuMobileItem
              onClick={() => {
                openModal();
                setOpen(false);
              }}
            >
              {t('newsletterSignUp')}
            </MenuMobileItem>
            <MenuMobileItem onClick={() => setOpen(false)}>
              <AHref link={APPLE_PODCAST} label={t('listenToPodcast')} target />
            </MenuMobileItem>
          </MobileMeneContainer>
        )}
      </div>
    </Layout>
  );
};

export default NavBar;
