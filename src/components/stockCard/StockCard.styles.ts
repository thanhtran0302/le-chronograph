import styled from 'styled-components';
import colors from '../../constants/colors';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  text-align: center;
  border: 1px solid ${colors.grey[40]};
  border-radius: ${radius[6]};
  padding: ${spaces[12]};
  transition: 0.5s;

  :hover {
    border: 1px solid ${colors.grey[100]};
    transition: 0.5s;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const BrandAndNickNameContainer = styled.div`
  text-align: left;
  margin-left: ${spaces[8]};
`;

export const BrandName = styled.div`
  font-weight: 700;
`;

export const NickName = styled.div``;
