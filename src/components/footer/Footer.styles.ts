import { Col } from 'react-grid-system';
import styled from 'styled-components';
import colors from '../../constants/colors';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  color: ${colors.grey[80]};
  padding: ${spaces[32]} 0;
  background: ${colors.dark[100]};
`;

export const FooterColumn = styled(Col)`
  display: flex;
  justify-content: space-between;
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
