import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 72vh;
  background-color: #202020;
  margin-top: 75px;
  padding: 1rem 0;
`;

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-left: 0;
  margin-bottom: 0;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;
      opacity: 0.8;
      transform: scale(90%);
      transition: all ease 0.3s;

      p{
        width: 140px;
        color: #fff;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      :hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(100%);
      }
    }

    img {
      width: 138px;
      height: 242px;
    }
  }

  @media screen and (min-width: 425px) {
    li img {
      width: 100%;
      height: 100%;
    }
  }
`;
