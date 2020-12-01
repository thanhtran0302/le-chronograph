import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';
import { ComponentAppearance } from '../button/Button';
import { PostCardProps } from './PostCard';

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: ${radius[3]};
`;

export const Title = styled.div<Partial<PostCardProps>>`
  ${paragraphs.h2};
  color: ${colors.mainLight};
  text-align: left;

  @media (min-width: ${breakpoints.tablet.iPadPro11}) {
    margin: ${spaces[24]} 0;
  }

  @media (max-width: ${breakpoints.tablet.iPadPro11}) {
    ${paragraphs.h4};
    margin-bottom: ${spaces[4]};
  }
`;

export const Author = styled.div`
  color: ${colors.green[100]};
  font-weight: 600;
`;

export const PublishDate = styled.div`
  color: ${colors.mainLight};
  font-weight: 600;
`;

export const primaryStyle: FlattenSimpleInterpolation = css`
  border: 2px solid ${colors.mainLight};
  background: transparent;

  :hover {
    background: ${colors.mainLight};

    ${Title} {
      color: ${colors.mainDark};
    }

    ${PublishDate} {
      color: ${colors.mainDark};
    }
  }
`;

export const secondaryStyle: FlattenSimpleInterpolation = css`
  border: 2px solid ${colors.mainDark};
  background: ${colors.mainLight};

  ${Title} {
    color: ${colors.mainDark};
  }

  ${PublishDate} {
    color: ${colors.mainDark};
  }

  :hover {
    background: ${colors.mainDark};

    ${Title} {
      color: ${colors.mainLight};
    }

    ${PublishDate} {
      color: ${colors.mainLight};
    }
  }
`;

const pickCardStyle = (
  appearance: ComponentAppearance
): FlattenSimpleInterpolation => {
  switch (appearance) {
    case ComponentAppearance.PRIMARY:
      return primaryStyle;
    case ComponentAppearance.SECONDARY:
      return secondaryStyle;
    default:
      return primaryStyle;
  }
};

export const Layout = styled.div<Partial<PostCardProps>>`
  transition: background-color 0.2s ease-in, border 0.2s ease-in,
    color 0.2s ease-in;
  border-radius: ${radius[3]};

  @media (min-width: ${breakpoints.tablet.iPadPro11}) {
    max-width: 300px;
    padding: ${spaces[24]} ${spaces[20]};
  }

  @media (max-width: ${breakpoints.tablet.iPadPro11}) {
    padding: ${spaces[12]};
    margin-bottom: ${spaces[16]};
  }

  ${({ appearance }: Partial<PostCardProps>) => pickCardStyle(appearance)}
`;

export const MetaDataContainer = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div``;
