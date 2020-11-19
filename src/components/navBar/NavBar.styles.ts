import styled from 'styled-components';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import radius from '../../constants/radius';
import shadows from '../../constants/shadows';
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

export const Logo = styled.img`
  max-width: ${spaces[48]};
  max-height: ${spaces[48]};
`;

export const MobileMeneContainer = styled.div`
  background: white;
  position: absolute;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: ${shadows.level2};
  padding: ${spaces[12]};
  border-radius: ${radius[6]};
  color: ${colors.dark[100]};
  font-weight: normal;
`;

export const MenuMobileItem = styled.div`
  padding: ${spaces[12]};

  a {
    color: ${colors.dark[100]};
    font-weight: normal;
  }
`;
