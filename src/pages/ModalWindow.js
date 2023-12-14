import React from "react";
import styled from "styled-components";

const Modal = ({ children, state, changeState }) => {
  return (
    <>
      {state && (
        <Overlay>
          <ModalContainer>
            <CloseButton onClick={() => changeState(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </CloseButton>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};
export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
width: auto;
height: 100vh;
background: #fff;
position: relative;
border-radius: 10px;
box-shadow; rgba(100,100,111,0.2) 0px 7px 29px 0px;
padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255,255,255,.6);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  color: #1766dc;
  svg {
    width: 100%;
    height: 100%;
  }

`;
