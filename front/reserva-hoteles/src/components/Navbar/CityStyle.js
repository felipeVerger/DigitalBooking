import styled from "styled-components";
import Select from "react-select";

export const Dropdown = styled(Select)`
  position: relative;
  z-index: 1000;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 96%;
    align-items: center;
  }
  width: 422px;
`;