import styled from 'styled-components';

const AddElementButton = styled.button`
  width: 120px;
  height: 25px;
  border-radius: 15px;
  /* font-size: 20px; */
  padding: 3px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundInoutColor};
  border: solid 1px rgba(0, 0, 0, 0.5);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const SubbButton = styled(AddElementButton)`
  width: 170px;
  height: 35px;
  font-size: 26px;
  margin: auto;
  border: 2px solid #444;
`;

export default AddElementButton;
