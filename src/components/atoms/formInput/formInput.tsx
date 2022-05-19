import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';

interface IformInput extends InputHTMLAttributes<HTMLInputElement> {
  width: string;
}

const formInput = styled.input<IformInput>`
  height: 20px;
  width: ${(props) => props.width};
  margin: 5px 5px 0 0;
  background-color: ${({ theme }) => theme.colors.backgroundInoutColor};
  border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default formInput;
