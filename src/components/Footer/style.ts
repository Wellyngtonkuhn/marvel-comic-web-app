import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  background-color: #202020;
  border-top: 1px solid #efe9e9;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  p {
    text-align: center;
    font-size: 0.69rem;
    font-weight: 300;
    color: #efe9e9;
    margin: 0;
  }

  ul {
    display: flex;
    padding-left: 0;
    gap: 1rem;
    margin: 0;
    margin-top: 0.5rem;

    li a {
      color: #fff;
    }

    li:nth-child(1):hover::before {
      content: "GitHub ";
      color: #fff;
      font-size: 0.7rem;
    }

    li:nth-child(2):hover::before {
      content: "LinkeDin ";
      color: #fff;
      font-size: 0.7rem;
    }

    li:nth-child(3):hover::before {
      content: "Marvel ";
      color: #fff;
      font-size: 0.7rem;
    }
  }
`;
