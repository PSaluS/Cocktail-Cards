import styled from 'styled-components';
import contentP from 'components/atoms/contentP';

const styledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-height: 85vh;
  width: 250px;
  padding: 10px;
  text-align: center;
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

export const StyledCard = styled.div`
  width: 500px;
  align-content: center;
`;

export const AddSpace = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  position: relative;
`;

export const SuccesField = styled(contentP)`
  color: #00ff00;
`;

export const ErrField = styled(contentP)`
  color: red;
`;

export default styledForm;
