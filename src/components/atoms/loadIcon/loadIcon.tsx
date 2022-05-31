import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

const LoadIcon = styled.div`
  border: 16px solid ${({ theme }) => theme.colors.backgroundColor};
  border-top: 16px solid ${({ theme }) => theme.colors.backgroundInoutColor};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
  margin: auto;
`;

export default LoadIcon;
