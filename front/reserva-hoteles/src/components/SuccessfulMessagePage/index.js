import React from 'react'
import {
    Container,
    Box,
    Gratitude,
    MessageText,
    Button,
} from './SuccessfulMessage'
import { Link } from 'react-router-dom'

const Message = ({message}) => {
  return (
    <Container>
        <Box>
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