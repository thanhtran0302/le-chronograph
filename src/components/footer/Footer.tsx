import React, { FC } from 'react';
import { Container } from 'react-grid-system';
import {
  APPLE_PODCAST,
  BlogLabel,
  BlogName,
  COPY_RIGHT,
  INSTAGRAM,
  SPOTIFY_PODCAST,
  YOUTUBE
} from '../../constants/common';
import AHref from '../aHref/AHref';
import {
  Layout,
  FooterColumn,
  SocialNetwork,
  SocialNetworks
} from './Footer.styles';

const Footer: FC = () => (
  <Layout>
    <Container>
      <FooterColumn style={{ width: '100%', maxWidth: 'auto' }} sm={8}>
        <div>
          {BlogName} {BlogLabel} {COPY_RIGHT}
        </div>
        <SocialNetworks>
          <SocialNetwork>
            <AHref link={APPLE_PODCAST} label={'Apple Podcast'} target />
          </SocialNetwork>
          <SocialNetwork>
            <AHref link={SPOTIFY_PODCAST} label="Spotify" target />
          </SocialNetwork>
          <SocialNetwork>
            <AHref link={INSTAGRAM} label="Instagram" target />
          </SocialNetwork>
          <SocialNetwork>
            <AHref link={YOUTUBE} label="Youtube" target />
          </SocialNetwork>
        </SocialNetworks>
      </FooterColumn>
    </Container>
  </Layout>
);

export default Footer;
