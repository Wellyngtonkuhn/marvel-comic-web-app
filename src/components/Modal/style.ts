import styled from "styled-components";

export const ModalSection = styled.section`
  width: 80%;
  height: 80%;
  margin: auto;
  background-color: aliceblue;
  border-radius: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -42%);
  transition: all ease 0.9s;

  @media screen and (min-width: 1440px) {
    width: 1152px;
    height: 80%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  button {
    background-color: transparent;
    border: none;

    :hover {
      cursor: pointer;
    }
  }
`;

export const ModalContent = styled.div``;
