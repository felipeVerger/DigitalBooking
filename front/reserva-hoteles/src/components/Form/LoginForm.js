import React, {useState} from 'react'
import TextField from './TextField'

const LoginForm = () => {

    const [errors, setErrors] = useState({})
  return (
    <form>
        <TextField label={"Correo electrónico"} errors={errors} name={"mail"} placeholder={"correo@electronico.com"} type={"email"} />

    </form>
  )
}

export default LoginForm