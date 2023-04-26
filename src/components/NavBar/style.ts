import styled from "styled-components";

export const NavBarHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.7rem 0;
  background-color: #202020;
  border-bottom: 1px solid #efe9e9;
  z-index: 1;
`;

export const NavBarContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  img {
    width: 7rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 0;

  li {
    button{
      border: none;
      background-color: transparent;
      font-size: 1rem;
      color: #fff;
      font-family: Roboto;
      font-weight: 500;
      transform: scale(95%);
      transition: all ease .3s;


      :hover{
        cursor: pointer;
        transform: scale(100%);
      }
    }
  }
`;
