import React, { FC } from 'react';

import {
  LoaderContainer,
  LoaderRing,
  LoaderRingContainer,
  LoaderTextLayout
} from './Loader.styles';

export interface LoaderProps {
  isWrapped?: boolean;
  text?: string;
}

const Loader: FC<LoaderProps> = ({ isWrapped, text }) => (
  <LoaderContainer isWrapped={isWrapped}>
    <LoaderRingContainer isWrapped={isWrapped}>
      <LoaderRing />
      {text && (
        <LoaderTextLayout
          dangerouslySetInnerHTML={{
            __html: text
          }}
        />
      )}
    </LoaderRingContainer>
  </LoaderContainer>
);

export default Loader;
