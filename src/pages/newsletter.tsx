import React, { FC } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import NewsletterModalContent from '../components/newsletterModalContent/NewsletterModalContent';
import spaces from '../constants/spaces';

export const Newsletter: FC = () =>
  (
    <Container style={{ marginTop: spaces[100] }}>
      <Col style={{ margin: 'auto' }} sm={8}>
        <NewsletterModalContent />
      </Col>
    </Container>
  );

export default Newsletter;
