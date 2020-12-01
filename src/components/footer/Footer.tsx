import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import {
  Layout,
  Title,
  FooterColumn,
  FooterContent,
  FooterItem
} from './Footer.styles';
import ApplePodcast from '../../assets/icons/apple_podcast.svg';
import Spotify from '../../assets/icons/spotify.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Youtube from '../../assets/icons/youtube.svg';
import NewsletterContent from '../newsletterContent/NewsletterContent';
import { ComponentAppearance } from '../button/Button';
import Link from 'next/link';

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
          <FooterItem>
            <ApplePodcast />
            {t('applePodcast')}
          </FooterItem>
          <FooterItem>
            <Spotify />
            {t('spotify')}
          </FooterItem>
          <FooterItem>
            <Instagram />
            {t('instagram')}
          </FooterItem>
          <FooterItem>
            <Youtube />
            {t('youtube')}
          </FooterItem>
        </FooterContent>
      </FooterColumn>
      <FooterColumn>
        <Title>{t('signUpToOurNewsletter')}</Title>
        <FooterContent>
          <FooterItem>{t('newsletterFooter')}</FooterItem>
          <FooterItem>
            <NewsletterContent appearance={ComponentAppearance.SECONDARY} />
          </FooterItem>
        </FooterContent>
      </FooterColumn>
    </Layout>
  );
};

export default Footer;
