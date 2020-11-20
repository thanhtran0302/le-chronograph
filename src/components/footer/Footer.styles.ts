import styled, { css } from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import spaces from '../../constants/spaces';

interface MobileProps {
  isMobile: boolean;
}

export const Layout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  color: ${colors.grey[80]};
  padding: ${spaces[32]} 0;
  background: ${colors.dark[100]};
`;

export const FooterColumn = styled.div<MobileProps>`
  display: flex;
  justify-content: space-between;

  ${({ isMobile }: MobileProps) =>
    isMobile &&
    css`
      align-items: center;
      flex-direction: column;
    `}
`;

export const FooterSitename = styled.div<MobileProps>`
  ${({ isMobile }: MobileProps) =>
    isMobile &&
    css`
      margin-bottom: ${spaces[12]};
    `}
`;

export const SocialNetworks = styled.div`
  display: flex;
`;

export const SocialNetwork = styled.div`
  margin-left: ${spaces[8]};
  font-weight: bold;

  a {
    color: ${colors.grey[80]};

    :hover {
      color: ${colors.grey[100]};
    }
  }
`;
