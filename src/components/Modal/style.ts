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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  div:nth-child(1) {
    width: 100%;
    height: 40%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div:nth-child(2) {
    width: 95%;
    height: 45%;
    margin: 0 auto;
    overflow-y: auto;

    h3 {
      font-size: 1rem;
      margin: 0;
      padding: 0.2rem 0.6rem;

      span {
        font-size: 0.9rem;
        font-weight: 400;
      }
    }

    p {
      font-size: 0.8rem;
      padding: 0.1rem 1rem;
      margin: 0;
      text-align: justify;
    }

    button {
      width: 100%;
      background-color: #9f0013;
      color: #fff;
      padding: 0.7rem 0;
      margin: 1rem 0;

      border-radius: 1rem;
      border: none;
      font-size: 1rem;
      font-weight: 700;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: calc(100% - 60px);

    div:nth-child(1) {
      width: 45%;
      height: 100%;
      border-bottom-left-radius: 1rem;

      img {
        height: 96.8%;
        border-bottom-left-radius: 1rem;

        @media screen and (min-width: 900px) {
          height: 100%;
        }
      }
    }

    div:nth-child(2) {
      width: 45%;
      height: 100%;
      border-bottom-right-radius: 1rem;

      h3 {
        font-size: 1.45rem;
        padding: 0.3rem 0.6rem;

        span {
          font-size: 1.1rem;
        }
      }

      p {
        font-size: 1rem;
        padding: 0.1rem 1rem;
        text-align: justify;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    div:nth-child(2) {
      button {
        opacity: 0.8;
        transition: all ease 0.3s;
        :hover {
          cursor: pointer;
          opacity: 1;
        }
      }
    }
  }
`;
