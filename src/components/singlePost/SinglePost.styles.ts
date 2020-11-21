import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';

interface MobileProps {
  isMobile: boolean;
}

export const Layout = styled.div<MobileProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media (max-width: ${breakpoints[480]}) {
    display: flex;
    flex-direction: column;
  }
`;

export const PostContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
`;

export const PostHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BackArrowContainer = styled.div`
  cursor: pointer;
  grid-column-end: 3;

  svg {
    border-radius: ${radius.rounded};

    :hover {
      background: ${colors.grey[20]};
      transition: 0.2s;
    }
  }
`;

export const PostTitle = styled.h1`
  grid-column-start: 3;
  grid-column-end: 11;
`;

export const PostAuthorAndDateContainer = styled.div`
  grid-row-start: 2;
  grid-column-start: 3;
  grid-column-end: 5;
  display: block;
`;

export const PostAuthor = styled.div`
  display: inline-block;
  color: ${colors.green[100]};
  font-weight: bold;
`;

export const PostCreationDate = styled.div`
  display: inline-block;
`;

export const PostCoverImageContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
`;

export const PostCoverImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  margin-top: ${spaces[16]};
  border-radius: ${radius[6]};

  @media (max-width: ${breakpoints[480]}) {
    height: 200px;
  }
`;

export const PostContent = styled.div`
  grid-column-start: 3;
  grid-column-end: 11;

  img {
    width: 100%;
    object-fit: cover;
  }

  iframe {
    display: block;
    margin: auto;
    width: 100%;
  }

  [data-oembed-type='video'] {
    iframe {
      height: 550px;

      @media (max-width: ${breakpoints[480]}) {
        height: 250px;
      }
    }
  }
`;

export const NewsletterContainer = styled.div`
  margin-top: ${spaces[56]};
  grid-column-start: 4;
  grid-column-end: 10;
`;
