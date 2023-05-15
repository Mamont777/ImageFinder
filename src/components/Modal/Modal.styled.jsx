import styled from 'styled-components';

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  max-width: calc(100vw - 48px);
  border-radius: 3px;
  padding: 4px;
  border: 2px solid rgb(39 137 174 / 50%);
`;
