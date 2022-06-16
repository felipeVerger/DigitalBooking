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

const Message = () => {
  return (
    <Container>
        <Box>
            <Logo src={require("../../assets/successful.png")} />
            <Gratitude>¡Muchas gracias!</Gratitude>
            <MessageText>Su reserva se ha realizado con éxito.</MessageText>
            <Link to={'/'}>
                <Button>ok</Button>
            </Link>
        </Box>
    </Container>
  )
}

export default Message