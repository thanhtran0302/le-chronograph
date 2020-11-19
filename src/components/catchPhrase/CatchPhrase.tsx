import React, { FC, Fragment } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { useMobileDevice } from '../../constants/responsive';
import { Layout } from './CatchPhrase.styles';

const CatchPhrase: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const isMobile: boolean = useMobileDevice();

  return !isMobile ? (
    <Layout dangerouslySetInnerHTML={{ __html: t('catchPhrase') }} />
  ) : (
    <Fragment />
  );
};

export default CatchPhrase;
