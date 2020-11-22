import React, { FC } from 'react';
import { Col, Container } from 'react-grid-system';
import {
  APPLE_PODCAST,
  BlogName,
  COPY_RIGHT,
  INSTAGRAM,
  SPOTIFY_PODCAST,
  YOUTUBE
} from '../../constants/common';
import { useMobileDevice } from '../../constants/responsive';
import AHref from '../aHref/AHref';
import {
  Layout,
  FooterColumn,
  SocialNetwork,
  SocialNetworks,
  FooterSitename
} from './Footer.styles';
import * as gtag from '../../utils/ga';

const Footer: FC = () => {
  const isMobile: boolean = useMobileDevice();

  return (
    <Layout>
      <Container>
        <Col style={{ width: '100%', maxWidth: 'auto' }} sm={8}>
          <FooterColumn isMobile={isMobile}>
            <FooterSitename isMobile={isMobile}>
              {BlogName} {COPY_RIGHT}
            </FooterSitename>
            <SocialNetworks>
              <SocialNetwork
                onClick={() => {
                  gtag.event({
                    action: 'CLICK_APPLE_PODCAST',
                    category: 'SOCIAL_MEDIA_CLICK',
                    label: 'APPLE_PODCAST',
                    value: 4
                  });
                }}
              >
                <AHref link={APPLE_PODCAST} label={'Apple Podcast'} target />
              </SocialNetwork>
              <SocialNetwork
                onClick={() => {
                  gtag.event({
                    action: 'CLICK_SPOTIFY',
                    category: 'SOCIAL_MEDIA_CLICK',
                    label: 'SPOTIFY',
                    value: 4
                  });
                }}
              >
                <AHref link={SPOTIFY_PODCAST} label="Spotify" target />
              </SocialNetwork>
              <SocialNetwork
                onClick={() =>
                  gtag.event({
                    action: 'CLICK_INSTAGRAM',
                    category: 'SOCIAL_MEDIA_CLICK',
                    label: 'INSTAGRAM',
                    value: 4
                  })
                }
              >
                <AHref link={INSTAGRAM} label="Instagram" target />
              </SocialNetwork>
              <SocialNetwork
                onClick={() =>
                  gtag.event({
                    action: 'CLICK_YOUTUBE',
                    category: 'SOCIAL_MEDIA_CLICK',
                    label: 'YOUTUBE',
                    value: 4
                  })
                }
              >
                <AHref link={YOUTUBE} label="Youtube" target />
              </SocialNetwork>
            </SocialNetworks>
          </FooterColumn>
        </Col>
      </Container>
    </Layout>
  );
};

export default Footer;
