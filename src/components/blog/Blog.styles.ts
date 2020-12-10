import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import spaces from '../../constants/spaces';

export const Layout = styled.div``;

export const BlogContentWrapper = styled.div`
  margin: 0 ${spaces[24]};
`;

export const BlogPostsContainer = styled.div`
  max-width: ${breakpoints.desktop.macBookPro};
  margin: auto;
`;
