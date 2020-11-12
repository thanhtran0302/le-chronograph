import React, { FC } from 'react';
import {
  Layout,
  Image,
  CardPostMetaData,
  CardTitle,
  CardPostPreview,
  CardPostCredit,
  CardPostAuthor,
  CardPostDate
} from './Card.styles';

const Card: FC = () =>
  (
    <Layout>
      <Image src="https://i.picsum.photos/id/866/600/800.jpg?hmac=7MjLDCug0s7JWRVrJz0nn-YuyW4PezXyfryEaOTgJx0" />
      <CardPostMetaData>
        <CardTitle>Comment être efficace en télétravail ?</CardTitle>
        <CardPostPreview>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum finibus efficitur. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Fusce a libero
          nec diam pulvinar interdum.
        </CardPostPreview>
        <CardPostCredit>
          <CardPostAuthor>Thanh Tran</CardPostAuthor>
          <CardPostDate>, 12 Novembre 2020</CardPostDate>
        </CardPostCredit>
      </CardPostMetaData>
    </Layout>
  );

export default Card;
