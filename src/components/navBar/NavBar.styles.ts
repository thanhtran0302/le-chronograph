import styled from 'styled-components';
import fonts from '../../constants/fonts';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spaces[32]};
`;

export const BlogTitle = styled.div`
  display: flex;
  font-size: ${fonts[48]};
  align-items: center;
  cursor: pointer;
`;

export const UnitedFor = styled.div`
  font-weight: 700;
`;

export const Blog = styled.div`
  margin-left: ${spaces[4]};
  font-family: Qwigley;
`;

export const ButtonsContainer = styled.div`
  display: flex;

  button:first-child {
    margin-right: ${spaces[4]};
  }
`;
