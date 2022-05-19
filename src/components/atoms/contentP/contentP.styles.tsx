import styled from 'styled-components';

interface ContentPInterface {
  black?: boolean;
  subTitle?: boolean;
}

const ContentP = styled.p<ContentPInterface>`
  margin: 0;
  padding: 0;
  opacity: 1;
  font-size: ${(props) => (props.subTitle ? 1.4 : 0.9)}rem;
  font-weight: ${(props) => (props.subTitle ? 'bold' : 'normal')};
  color: ${(props) => (props.black ? 'black' : 'white')};
`;

export default ContentP;
