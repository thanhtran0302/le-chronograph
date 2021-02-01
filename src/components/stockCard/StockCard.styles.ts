import styled, { css } from 'styled-components';
import colors from '../../constants/colors';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';
import { OwnProps } from './StockCard';

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
  justify-content: space-between;
`;

export const BrandWrapper = styled.div`
  display: flex;
`;

export const BrandAndNickNameContainer = styled.div`
  text-align: left;
  margin-left: ${spaces[8]};
`;

export const BrandName = styled.div`
  font-weight: 700;
`;

export const NickName = styled.div``;

export const RateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RateSpan = styled.span<Pick<OwnProps, 'isGrow'>>`
  font-weight: 600;

  ${({ isGrow }: Pick<OwnProps, 'isGrow'>) =>
    isGrow
      ? css`
          color: ${colors.green[100]};
        `
      : css`
          color: ${colors.red};
        `}
`;

export const ChildrenContainer = styled.div`
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
