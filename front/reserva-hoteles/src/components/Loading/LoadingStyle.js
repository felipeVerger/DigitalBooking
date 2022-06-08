import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap'

export const LoadingContainer = styled.div`
    height: 100vh;
    position: relative;
`

export const LoadingBody = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

export const SpinnerComponent = styled(Spinner)`
  width: 100px;
  height: 100px;
  border: 10px solid currentColor;
  border-right-color: transparent;
`
