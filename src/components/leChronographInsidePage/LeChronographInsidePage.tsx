import React, { FC, Fragment } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import SimpleHeader from '../simpleHeader/SimpleHeader';
import LeChronographInsideNewsletter from './leChronographInsideNewsletter/LeChronographInsideNewsletter';
import {
  BulletListTitle,
  BulletListWrapper
} from './LeChronographInsidePage.styles';

const LeChronographInsidePage: FC = () => {
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <Fragment>
      <SimpleHeader
        title={t('leChronographInside')}
        subtitle={t('receiveInsideStats')}
        link={'/lechronograph-inside'}
      >
        <LeChronographInsideNewsletter />
        <BulletListWrapper>
          <BulletListTitle>{t('receiveEachMonth')}</BulletListTitle>
          <ul>
            <li>{t('receiveStats')}</li>
            <li>{t('receiveRevenus')}</li>
            <li>{t('receiveStrategies')}</li>
          </ul>
        </BulletListWrapper>
      </SimpleHeader>
    </Fragment>
  );
};

export default LeChronographInsidePage;
