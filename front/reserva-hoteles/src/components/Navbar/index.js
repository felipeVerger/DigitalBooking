import React, {useState, useEffect} from 'react'
import { NavbarBody, NavbarBlock, Title, Form, SelectBox, OptionsContainer, PreSelected, Option, Label, Box, Button, DatePickerBox } from './NavbarComponent';
import {ImLocation} from 'react-icons/im'
import {GoLocation} from 'react-icons/go'
import {AiOutlineCalendar} from 'react-icons/ai'

import './DatePickerStyles.css'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

const ciudades = [
    {
        city: 'San Carlos de Bariloche',
        country: 'Argentina'
    },
    {
        city: 'Mendoza',
        country: 'Argentina'
    },
    {
        city: 'Cordoba',
        country: 'Argentina'
    },
    {
        city: 'Buenos Aires',
        country: 'Argentina'
    },
]

const renderCustomInput = ({ ref }) => (
    <input
      ref={ref}
      placeholder="Check in - Check out"
      className="my-custom-input-class"
    />
  )

const Navbar = () => {

  const [active, setActive] = useState(false)
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });

  const handleToggle = () => {
      setActive(!active)
  }



  return (
    <NavbarBody>
        <NavbarBlock>
            <Title>Busca ofertas en hoteles, casas y mucho mas</Title>
            <Form >
                <SelectBox>
                    <OptionsContainer className={active ? 'active' : ''}>
                        {
                            ciudades.map((item, index) => (
                                <Option key={index}>
                                    <input className='radio' type="radio" id={item.city} name="city"/>
                                    <Label for={item.city}>
                                        <GoLocation/>
                                        <Box>
                                            <span>{item.city}</span>
                                            <small>{item.country}</small>
                                        </Box>
                                    </Label>
                                    <hr/>
                                </Option>
                            ))
                        }
                    </OptionsContainer>
                    <PreSelected onClick={() => handleToggle()}>
                        <ImLocation/>
                        <span>¿A donde vamos?</span>
                    </PreSelected>
                </SelectBox>
                <DatePickerBox>
                    <DatePicker
                        value={selectedDayRange}
                        onChange={setSelectedDayRange}
                        renderInput={renderCustomInput}
                        shouldHighlightWeekends
                    />
                </DatePickerBox>
                <Button type='submit'>Buscar</Button>
            </Form>
        </NavbarBlock>
    </NavbarBody>
  )
}

export default Navbar;