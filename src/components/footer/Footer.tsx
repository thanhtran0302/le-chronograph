import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import {
  Layout,
  Title,
  FooterColumn,
  FooterContent,
  FooterItem,
  ALink
} from './Footer.styles';
import ApplePodcast from '../../assets/icons/apple_podcast.svg';
import Spotify from '../../assets/icons/spotify.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Youtube from '../../assets/icons/youtube.svg';
import NewsletterContent from '../newsletterContent/NewsletterContent';
import { ComponentAppearance } from '../button/Button';
import Link from 'next/link';
import {
  APPLE_PODCAST,
  INSTAGRAM,
  SPOTIFY_PODCAST,
  YOUTUBE
} from '../../constants/common';

const Footer: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <FooterColumn>
        <Title>{t('recentPosts')}</Title>
        <FooterContent>
          <FooterItem>
            La Rolex Daytonay est-elle la montre la plus belle ?
          </FooterItem>
          <FooterItem>
            La Rolex Daytonay est-elle la montre la plus belle ?
          </FooterItem>
          <FooterItem>
            La Rolex Daytonay est-elle la montre la plus belle ?
          </FooterItem>
          <FooterItem>
            La Rolex Daytonay est-elle la montre la plus belle ?
          </FooterItem>
        </FooterContent>
      </FooterColumn>
      <FooterColumn>
        <Title>{t('entreprise')}</Title>
        <FooterContent>
          <FooterItem>{t('about')}</FooterItem>
          <FooterItem>{t('investment')}</FooterItem>
          <Link href={'/blog'}>
            <FooterItem>{t('blog')}</FooterItem>
          </Link>
          <FooterItem>{t('legalMentions')}</FooterItem>
          <FooterItem>{t('personalData')}</FooterItem>
          <FooterItem>{t('leChronographInside')}</FooterItem>
        </FooterContent>
      </FooterColumn>
      <FooterColumn>
        <Title>{t('followUs')}</Title>
        <FooterContent>
          <ALink href={APPLE_PODCAST} target="_blank">
            <FooterItem>
              <ApplePodcast />
              {t('applePodcast')}
            </FooterItem>
          </ALink>
          <ALink href={SPOTIFY_PODCAST} target="_blank">
            <FooterItem>
              <Spotify />
              {t('spotify')}
            </FooterItem>
          </ALink>
          <ALink href={INSTAGRAM} target="_blank">
            <FooterItem>
              <Instagram />
              {t('instagram')}
            </FooterItem>
          </ALink>
          <ALink href={YOUTUBE} target="_blank">
            <FooterItem>
              <Youtube />
              {t('youtube')}
            </FooterItem>
          </ALink>
        </FooterContent>
      </FooterColumn>
      <FooterColumn>
        <Title>{t('signUpToOurNewsletter')}</Title>
        <FooterContent>
          <NewsletterContent
            appearance={ComponentAppearance.SECONDARY}
            hasSubtitle
          />
        </FooterContent>
      </FooterColumn>
    </Layout>
  );
};

export default Footer;
