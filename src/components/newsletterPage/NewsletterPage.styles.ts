import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  position: relative;
  display: flex;
  height: 80%;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-left: ${spaces[32]};

  @media (max-width: ${breakpoints[480]}) {
    margin-left: 0;
    padding: ${spaces[24]};
  }
`;

export const FormContainer = styled.form`
  display: flex;

  @media (max-width: ${breakpoints[480]}) {
    flex-direction: column;

    button {
      margin-top: ${spaces[12]};
    }
  }

  @media (min-width: ${breakpoints[480]}) {
    button {
      margin-left: ${spaces[12]};
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: ${spaces[12]};
`;

export const Title = styled.div`
  ${paragraphs.h1};
  margin-left: ${spaces[12]};
`;

export const Subtitle = styled.div`
  ${paragraphs.h2};
  margin: ${spaces[12]} 0;
`;

export const Description = styled.div`
  ${paragraphs.body1};
  max-width: 600px;
  margin-bottom: ${spaces[12]};
`;

export const RedSpanText = styled.span`
  color: ${colors.red};
  font-weight: 600;
`;

export const GreenSpanText = styled.span`
  color: ${colors.green[100]};
  font-weight: 600;
`;

export const SvgContainer = styled.div`
  position: absolute;
  z-index: -3;
  right: 0;
  top: 0;
`;

export const Image = styled.div`
  display: flex;
  margin-left: 250px;
  padding-top: 50px;
`;
