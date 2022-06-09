import React from 'react'
import {
    ErrorContainer,
    ErrorBody,
    ErrorType,
    ErrorText,
    Button
} from './ErrorStyle'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <ErrorContainer>
        <ErrorBody>
            <ErrorType>404</ErrorType>
            <ErrorText>Page not found</ErrorText>
            <Link to={'/'}>
                <Button>Back home</Button>
            </Link>
        </ErrorBody>
    </ErrorContainer>
  )
}

export default ErrorPage