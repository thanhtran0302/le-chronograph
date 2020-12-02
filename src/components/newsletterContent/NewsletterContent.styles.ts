import styled from 'styled-components';
import colors from '../../constants/colors';
import spaces from '../../constants/spaces';

export const Layout = styled.form`
  position: relative;
`;

export const EmailError = styled.div`
  margin-top: ${spaces[8]};
  color: ${colors.red};
  font-weight: bold;
`;

export const EmailSuccess = styled.div`
  margin-top: ${spaces[8]};
  color: ${colors.green[100]};
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  margin-top: ${spaces[12]};

  button {
    width: 100%;
    span {
      margin: auto;
    }
  }
`;

export const InputButtonWrapper = styled.div`
  display: flex;

  button {
    margin-left: ${spaces[8]};
  }
`;

export const CheckboxesWrapper = styled.div`
  display: flex;
  margin-top: ${spaces[4]};
`;

export const NewsletterSubtitle = styled.div`
  margin-bottom: ${spaces[12]};
`;
