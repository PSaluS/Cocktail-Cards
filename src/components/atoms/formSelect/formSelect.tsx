import styled from 'styled-components';

const formSelect = styled.select`
  width: 208px;
  background: ${({ theme }) => theme.colors.backgroundInoutColor};
  border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-size: 17px;
  cursor: pointer;

  option {
    background: white;
    /* display: flex; */
    /* white-space: pre; */
    min-height: 25px;
    padding: 2px;
  }
`;

export default formSelect;
