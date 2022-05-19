import styled from 'styled-components';

interface IbImg {
  bImg?: string;
}

const dropezoneStyled = styled.div<IbImg>`
  align-items: center;
  width: 200px;
  height: 50px;
  background: ${({ theme }) => theme.colors.backgroundInoutColor};
  border: 2px dashed ${({ theme }) => theme.colors.borderColor};
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-size: 0.8rem;
  background-image: url(${({ bImg }) => bImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  margin: auto;
`;

export default dropezoneStyled;
