import styled, { css } from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import spaces from '../../constants/spaces';
import { sectionBgColor } from './Section';

interface ElementsContainerProps {
  backgroundColor: sectionBgColor;
}

interface ImageContainerProps {
  hasImageOnMobile: boolean;
}

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 100%;

  @media (max-width: ${breakpoints[480]}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const Subtitle = styled.div`
  ${paragraphs.h1};
`;

export const Title = styled.div`
  ${paragraphs.big_title};

  @media (max-width: 1305px) {
    ${paragraphs.h1};
  }

  @media (max-width: 1050px) {
    ${paragraphs.h2};
  }

  @media (max-width: ${breakpoints[480]}) {
    text-align: center;
  }
`;

export const Content = styled.div`
  margin-top: ${spaces[100]};

  @media (max-width: ${breakpoints[480]}) {
    margin-top: ${spaces[32]};
  }
`;

export const ElementsContainer = styled.div<ElementsContainerProps>`
  width: 50%;

  @media (min-width: ${breakpoints[1200]}) {
    padding: ${spaces[100]} ${spaces[72]};
  }

  @media (max-width: ${breakpoints[1200]}) {
    padding: ${spaces[48]} ${spaces[40]};
  }

  @media (max-width: ${breakpoints[480]}) {
    width: 100%;
    padding: ${spaces[24]} ${spaces[24]};
  }

  ${({ backgroundColor }: ElementsContainerProps) =>
    backgroundColor === 'dark'
      ? css`
          background: ${colors.mainDark};
          color: ${colors.mainLight};
        `
      : css`
          background: ${colors.mainLight};
          color: ${colors.mainDark};
        `}
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 50%;

  @media (max-width: ${breakpoints[480]}) {
    width: 100%;

    ${({ hasImageOnMobile }: ImageContainerProps) =>
      !hasImageOnMobile &&
      css`
        display: none;
      `}
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
