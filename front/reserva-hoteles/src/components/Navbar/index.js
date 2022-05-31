import React, { useState, useEffect, useRef } from "react";
import {
  NavbarBody,
  NavbarBlock,
  Title,
  Form,
  Button,
  CalendarContainer,
  Dropdown,
  CalendarIcon,
} from "./NavbarComponent";
import { ImLocation } from "react-icons/im";
import { GoLocation } from "react-icons/go";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";
import "react-dropdown/style.css";

const ciudades = [
  {
    city: "San Carlos de Bariloche",
    country: "Argentina",
  },
  {
    city: "Mendoza",
    country: "Argentina",
  },
  {
    city: "Cordoba",
    country: "Argentina",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
  },
];

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

const Navbar = () => {

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

  const [data, setData] = useState({
    city: "",
    date: { startDate: null, endDate: null },
  });

  const handleDateSelect = (ranges) => {
    setData({ ...data, date: ranges.selection });
    if (ranges.selection.endDate !== ranges.selection.startDate) {
      toggleCalendarOpen();
    }
  };

  const selectionRange = {
    startDate: data.date.startDate ? data.date.startDate : new Date(),
    endDate: data.date.endDate ? data.date.endDate : new Date(),
    key: "selection",
  };

  const handleCityChange = (city) => {
    setData({
      ...data,
      city: city.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [calendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendarOpen = () => {
    setCalendarOpen(!calendarOpen);
  };

  return (
    <NavbarBody>
      <NavbarBlock>
        <Title>Busca ofertas en hoteles, casas y mucho mas</Title>
        <Form onSubmit={handleSubmit}>
          <Dropdown
            options={ciudades.map((item) => ({
              value: item.city,
              label: item.city,
            }))}
            placeholder={"¿A donde vamos?"}
            onChange={handleCityChange}
          />
          <CalendarContainer
            ref={ref}
            onClick={() => setCalendarOpen(true)}
            isCalendarOpen={calendarOpen}
          >
            {calendarOpen ? (
              <DateRange
                minDate={new Date()}
                locale={es}
                ranges={[selectionRange]}
                onChange={handleDateSelect}
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
          <Button type="submit">Buscar</Button>
        </Form>
      </NavbarBlock>
    </NavbarBody>
  );
};

export default Navbar;
