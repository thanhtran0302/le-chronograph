import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { Layout } from './CatchPhrase.styles';

const CatchPhrase: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    
    <Layout dangerouslySetInnerHTML={{ __html: t('catchPhrase') }}/>
  );
};

export default CatchPhrase;
