import styled from 'styled-components';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import spaces from '../../constants/spaces';

export const Layout = styled.form`
  display: flex;
  align-items: flex-end;
  margin-top: ${spaces[24]};

  > button {
    margin-left: ${spaces[8]};
  }
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

export const NewsletterTitle = styled.div`
  ${paragraphs.h3};
  text-align: center;
`;
