import React, {useState, useEffect, useRef, useContext} from 'react'
import {CalendarContainer, CalendarIcon} from './CalendarStyle'
import { FilterContext } from '../../context/filter-context';

import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const getDateString = (date) => {
  const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  return (
    days[date.getDay()] +
    ", " +
    date.getDate() +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear()
  );
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const SearchCalendar = ({data, setData}) => {
  const {filter} = useContext(FilterContext);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (calendarOpen && ref.current && !ref.current.contains(e.target)) {
        setCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [calendarOpen]);

  const handleDateSelect = (ranges) => {
    setData({ date: ranges.selection });
    if (ranges.selection.endDate !== ranges.selection.startDate) {
      toggleCalendarOpen();
    }
  };

  const selectionRange = {
    startDate: data.date.startDate ? data.date.startDate : new Date(),
    endDate: data.date.endDate ? data.date.endDate : new Date(),
    key: "selection",
  };

  const toggleCalendarOpen = () => {
    setCalendarOpen(!calendarOpen);
  };

  return (
    <CalendarContainer
        ref={ref}
        onClick={() => setCalendarOpen(true)}
        isCalendarOpen={calendarOpen}
    >
        {calendarOpen ? (
            <DateRange
                months={getWindowDimensions().width > 768 ? 2 : 1}
                minDate={new Date()}
                locale={es}
                ranges={[selectionRange]}
                onChange={handleDateSelect}
                direction={"horizontal"}
            />
        ) : (
          <>
            <CalendarIcon />
                <div>
                  {data.date.startDate
                    ? getDateString(data.date.startDate)
                    : "Check In"}
                  {" - "}
                  {data.date.endDate
                    ? getDateString(data.date.endDate)
                    : "Check Out"}
                </div>
          </>
            )}
    </CalendarContainer>
  )
}

export default SearchCalendar