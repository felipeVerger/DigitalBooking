import styled from "styled-components";
import { AiOutlineCalendar } from "react-icons/ai";

export const CalendarContainer = styled.div`
  z-index: ${props => props.isCalendarOpen ? 998 : 0};
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

export const CalendarIcon = styled(AiOutlineCalendar)`
  line-height: 0;
`;