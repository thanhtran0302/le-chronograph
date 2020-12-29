import React, { FC } from 'react';
import {
  ElementsContainer,
  ImageContainer,
  Layout,
  Title,
  Subtitle,
  Content,
  Image
} from './Section.styles';

export type sectionBgColor = 'dark' | 'light';

interface SectionProps {
  backgroundColor: sectionBgColor;
  backgroundPosition: 'left' | 'right';
  image: string;
  hasImageOnMobile?: boolean;
  title?: string;
  subtitle?: string;
}

const Section: FC<SectionProps> = ({
  image,
  backgroundColor,
  backgroundPosition,
  children,
  hasImageOnMobile = true,
  title,
  subtitle
}) => {
  const isBgLeft: boolean = backgroundPosition === 'left';

  return (
    <Layout>
      {isBgLeft && (
        <ElementsContainer backgroundColor={backgroundColor}>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <Content>{children}</Content>
        </ElementsContainer>
      )}
      <ImageContainer hasImageOnMobile={hasImageOnMobile}>
        <Image src={image} />
      </ImageContainer>
      {!isBgLeft && (
        <ElementsContainer backgroundColor={backgroundColor}>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <Content>{children}</Content>
        </ElementsContainer>
      )}
    </Layout>
  );
};

export default Section;
