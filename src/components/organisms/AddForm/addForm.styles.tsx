import styled from 'styled-components';

const styledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-height: 85vh;
  width: 250px;
  /* box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.2); */
  padding: 10px;
  text-align: center;
  /* justify-content: center; */
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

export default styledForm;
