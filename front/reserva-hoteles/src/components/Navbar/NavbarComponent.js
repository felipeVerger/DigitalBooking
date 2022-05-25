import styled from "styled-components";
import Select from "react-select";
import { AiOutlineCalendar } from "react-icons/ai";

export const NavbarBody = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  max-width: 100vw;
  z-index: 998;
  height: 150px;
  @media screen and (max-width: 768px) {
    height: 237px;
  }
  @media screen and (max-width: 728px) {
    height: 275px;
  }
  @media screen and (max-width: 417px) {
    height: 320px;
  }
`;

export const NavbarBlock = styled.div`
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 296px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${(props) => props.theme.secondary};
  font-size: 1rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-height: 45px;
  }
`;

export const CalendarContainer = styled.div`
  z-index: 998;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  color: #333;
  cursor: default;
  outline: none;
  padding: 8px 10px 8px 10px;
  transition: all 200ms ease;
  cursor: pointer;
  display: flex;
  align-items: ${props => props.isCalendarOpen ? "flex-start" : "center"};

  div {
    margin-left: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 96%;
    justify-content: ${props => props.isCalendarOpen ? "center" : ""};
  }
  width: 422px;
  max-height: 38px;
  color: gray;
`;

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

export const CalendarIcon = styled(AiOutlineCalendar)`
  line-height: 0;
`;
