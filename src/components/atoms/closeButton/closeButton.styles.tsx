import styled from 'styled-components';

const CloseButton = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
  font-family: 'Nunito', sans-serif;
  text-align: center;
  width: 28px;
  height: 28px;
  font-size: 25px;
  color: white;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 1);
  cursor: pointer;
  border: 2px white solid;
  border-radius: 30%;
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.5);
  margin-top: 3px;
  margin-left: 5px;
  position: absolute;
  right: 3px;
  top: 3px;
`;

export default CloseButton;
