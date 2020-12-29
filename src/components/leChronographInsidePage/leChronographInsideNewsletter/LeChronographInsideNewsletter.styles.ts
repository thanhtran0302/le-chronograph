import styled, { css } from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import colors from '../../../constants/colors';
import spaces from '../../../constants/spaces';

interface FormProps {
  isEnoughWidth: boolean;
}

export const Layout = styled.div`
  position: relative;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  max-width: ${breakpoints.tablet.iPadMini};
  margin: auto;

  ${({ isEnoughWidth }: FormProps) =>
    isEnoughWidth &&
    css`
      flex-direction: column;
    `}

  > button {
    ${({ isEnoughWidth }: FormProps) =>
      !isEnoughWidth
        ? css`
            margin-left: ${spaces[12]};
          `
        : css`
            margin-top: ${spaces[12]};
          `}
  }
`;

export const EmailStateContainer = styled.div`
  margin-top: ${spaces[12]};
  max-width: ${breakpoints.tablet.iPadMini};
  margin: auto;
  text-align: left;
  font-weight: bold;
`;

export const EmailError = styled.div`
  color: ${colors.red};
`;

export const EmailSuccess = styled.div`
  color: ${colors.green[100]};
`;
