import styled from 'styled-components';

interface Ifocus {
  focus: null | string;
}

const FlexSpace = styled.div<Ifocus>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: width 0.25s ease-in-out;
  width: ${({ focus }: Ifocus) =>
    focus !== null ? `${window.innerWidth - 310}px` : `${window.innerWidth}px`};
  position: relative;
  max-height: ${window.innerHeight - 85};
  height: ${window.innerHeight - 85};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default FlexSpace;
