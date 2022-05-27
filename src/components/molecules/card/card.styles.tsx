import styled, { keyframes } from 'styled-components';
import ContentP from 'components/atoms/contentP';

interface stringLink {
  imgUrl: string | null;
}

const slizeAnim = keyframes`
  from{
    transform: translate(0px, 0px);
    }
  to{
    transform: translate(0px, -270px);
    }
  `;

export const CardStyle = styled.div<stringLink>`
  width: 185px;
  height: 300px;
  min-width: 185px;
  min-height: 300px;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #666;
  border-radius: 3px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
  margin: 5px;
`;

export const CardP = styled(ContentP)`
  text-align-last: center;
`;

export const Bar = styled.div`
  mix-blend-mode: luminosity;
  background-color: #aaa;
  height: 100%;
  margin: 0;
  padding-left: 3px;
  padding-right: 3px;
  top: 90%;
  position: relative;
  ${CardStyle}:hover & {
    animation: ${slizeAnim} 0.2s ease-in-out forwards;
  }
`;

export const IconsSpaces = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flexbox;
  bottom: 10px;
`;
