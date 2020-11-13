import styled from 'styled-components';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import radius from '../../constants/radius';
import shadows from '../../constants/shadows';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  background: white;
  cursor: pointer;
  border-radius: ${radius[6]};
  box-shadow: ${shadows.level1};

  :hover {
    box-shadow: ${shadows.level5};
    transition: 0.5s;
  }
`;

export const Image = styled.img`
  border-radius: ${radius[6]};
  width: 100%;
  max-height: 200px;
`;

export const CardPostMetaData = styled.div`
  padding: ${spaces[16]} ${spaces[24]};
`;

export const CardTitle = styled.div`
  ${paragraphs.h2};
  margin-bottom: ${spaces[16]};
`;

export const CardPostPreview = styled.div`
  ${paragraphs.body1};
  color: ${colors.dark[80]};
  margin-bottom: ${spaces[16]};
`;

export const CardPostCredit = styled.div`
  display: flex;
`;

export const CardPostAuthor = styled.div`
  ${paragraphs.body2};
  color: ${colors.green[100]};
`;

export const CardPostDate = styled.div`
  ${paragraphs.body2};
  color: ${colors.dark[60]};
`;
