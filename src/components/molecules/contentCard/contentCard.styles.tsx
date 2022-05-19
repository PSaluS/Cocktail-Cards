import styled from 'styled-components';
import Cocktail from 'API/types';
import ContentP from 'components/atoms/contentP';

export const ContentTitle = styled(ContentP)`
  padding: 5px;
  text-align: center;
  width: 88%;
  box-sizing: border-box;
  margin-top: 2px;
  margin-bottom: 5px;
`;

export const ElementsSpace = styled.div`
  width: 75%;
  box-sizing: border-box;
  padding: 5px;
`;

export const IconsSpaces = styled.div`
  width: 25%;
  box-sizing: border-box;
  padding: 5px 5px 5px 5px;
`;

export const CraftSpace = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  margin-top: 5px;
`;

export const AuthorSpace = styled.div`
  margin-top: 5px;
  width: 95%;
  text-align: right;
`;

interface propsFocus {
  focus: Cocktail;
  isAdd?: boolean;
}

export const BackSpace = styled.div`
  /* width: ${({ focus }: propsFocus) => (focus.id !== null ? '300px' : '0px')};
  min-width: ${({ focus }: propsFocus) => (focus.id !== null ? '300px' : '0px')}; */
  width: 300px;
  transform: translateX(${({ focus }: propsFocus) => (focus.id !== null ? '0px' : '-300px')});
  transition: transform 0.25s ease-in-out;
  height: 50 vh;
  max-height: '${window.innerHeight - 85}px';
  box-shadow: 3px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 5px 0px;
  background-color: white;
  /* position: absolute; */
  position: ${({ isAdd }: propsFocus) => (isAdd ? 'flex' : 'absolute')};
  /* position: flex; */
  top: 1px;
  /* position: ${({ focus }: propsFocus) => (focus.id !== null ? 'stick' : 'absolute')}; */
  /* top: ${({ focus }: propsFocus) => (focus.id !== null ? '1px' : '85px')}; */
  left: 0px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  z-index: 2;
  padding: none;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
