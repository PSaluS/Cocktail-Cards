import styled from 'styled-components';

const formTextArea = styled.textarea`
  width: 200px;
  max-width: 200px;
  min-width: 200px;
  min-height: 200px;
  max-height: 200px;
  background: ${({ theme }) => theme.colors.backgroundInoutColor};
  border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default formTextArea;
