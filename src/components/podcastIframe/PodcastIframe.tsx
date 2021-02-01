import React, { FC, Fragment } from 'react';
import { ApplePodcastIframe } from './PodcastIframe.styles';

interface OwnProps {
  width: number;
}

const PodcastIframe: FC<OwnProps> = ({ width }) => (
  <Fragment>
    <ApplePodcastIframe
      width={width}
      src="https://embed.podcasts.apple.com/fr/podcast/le-chronograph/id1539187268?itsct=podcast_box&amp;itscg=30200&amp;theme=light"
      frameBorder="0"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
      allow="autoplay *; encrypted-media *;"
    />
  </Fragment>
);

export default PodcastIframe;
