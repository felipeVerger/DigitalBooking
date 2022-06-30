import React from 'react'
import {
    Container,
    Box,
    Logo,
    Gratitude,
    MessageText,
    Button,
} from './SuccessfulMessage'
import { Link } from 'react-router-dom'

const Message = ({ message }) => {
  return (
    <Container>
        <Box>
            <Logo src={require("../../assets/logo-exito.png")} />
            <Gratitude>¡Muchas gracias!</Gratitude>
            <MessageText>{message}</MessageText>
            <Link to={'/'}>
                <Button>ok</Button>
            </Link>
        </Box>
    </Container>
  )
}

export default Message