import styled from "styled-components";

export const Container = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media screen and (min-width: 768px) {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin: auto;
  }
`;
