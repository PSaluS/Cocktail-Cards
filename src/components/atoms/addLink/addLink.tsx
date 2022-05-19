import styled from 'styled-components';

const addLink = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  text-align: center;
  padding: 2px;
  margin: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundInoutColor};
  font-size: 36px;
  right: 10px;
  text-decoration: none;
  cursor: pointer;
  color: black;
  bottom: 10px;
  z-index: 3;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export default addLink;
