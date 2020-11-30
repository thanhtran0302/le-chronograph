import React, { FC } from 'react';
import {
  ElementsContainer,
  ImageContainer,
  Layout,
  Title,
  Content
} from './Section.styles';

export type sectionBgColor = 'dark' | 'light';

interface SectionProps {
  backgroundColor: sectionBgColor;
  backgroundPosition: 'left' | 'right';
  image: string;
  title: string;
  hasImageOnMobile?: boolean;
}

const Section: FC<SectionProps> = ({
  image,
  backgroundColor,
  backgroundPosition,
  title,
  children,
  hasImageOnMobile = true
}) => {
  const isBgLeft: boolean = backgroundPosition === 'left';

  return (
    <Layout>
      {isBgLeft && (
        <ElementsContainer backgroundColor={backgroundColor}>
          <Title>{title}</Title>
          <Content>{children}</Content>
        </ElementsContainer>
      )}
      <ImageContainer hasImageOnMobile={hasImageOnMobile}>
        <img src={image} />
      </ImageContainer>
      {!isBgLeft && (
        <ElementsContainer backgroundColor={backgroundColor}>
          <Title>{title}</Title>
          <Content>{children}</Content>
        </ElementsContainer>
      )}
    </Layout>
  );
};

export default Section;
