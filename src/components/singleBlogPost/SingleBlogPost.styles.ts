import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import paragraphs from '../../constants/paragraphs';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  width: 100%;
`;

export const ImageContainer = styled.div`
  height: 500px;
  max-height: 500px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet.iPadPro11}) {
    height: 300px;
    max-height: 300px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const PostContainer = styled.div`
  max-width: ${breakpoints[1200]};
  width: 100%;
  margin: auto;
`;

export const PostTitle = styled.div`
  ${paragraphs.h1};
  margin: ${spaces[24]} 0 ${spaces[12]} 0;

  @media (max-width: ${breakpoints.smartphone.iPhone11ProMax}) {
    ${paragraphs.h2};
    margin: ${spaces[24]} ${spaces[24]} ${spaces[12]} ${spaces[24]};
  }
`;

export const PostMetaData = styled.div`
  display: flex;
  font-weight: 600;

  @media (max-width: ${breakpoints.smartphone.iPhone11ProMax}) {
    ${paragraphs.subtitle};
    margin: 0 ${spaces[24]};
  }
`;

export const PostAuthor = styled.div`
  color: ${colors.green[100]};
`;

export const PostPublishDate = styled.div``;

export const PostContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 780px 1fr;
  grid-column-gap: ${spaces[32]};

  @media (max-width: ${breakpoints.smartphone.iPhone11ProMax}) {
    grid-template-columns: 1fr;
  }
`;

export const PostContent = styled.div`
  @media (max-width: ${breakpoints.smartphone.iPhone11ProMax}) {
    padding: 0 ${spaces[24]};

    h2 {
      font-size: ${fonts[24]} !important;
      line-height: ${fonts[28]} !important;
    }
  }

  img {
    display: block;
    margin: auto;
    max-width: 100%;
    object-fit: cover;
  }

  p,
  ul,
  span {
    ${paragraphs.body1};
  }
`;

export const PostNewsletter = styled.div`
  @media (max-width: ${breakpoints.tablet.iPadPro11}) {
    display: none;
  }
  max-width: ${breakpoints.smartphone.iPhone11ProMax};
`;

export const PostNewsletterContent = styled.div`
  position: sticky;
  top: ${spaces[24]};
  border: 2px solid ${colors.mainDark};
  border-radius: ${radius[3]};
  padding: ${spaces[24]};

  @media (max-width: ${breakpoints.tablet.iPadPro11}) {
    display: none;
  }
`;
