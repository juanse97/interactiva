import { Container, FormControl, InputLabel, Input, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import './login.css'

export const Login = () => {
  return (
    <>
      <main role="main">
        <div className='content-login'>
          <Container className='container' maxWidth="xl">
            <div className="content-principal">
              <div className="login">
                {/* Logo */}
                <div className="content-logo">
                  <img src="assets/images/login/logo.png" alt="User Profile" width="120" height="32" loading="lazy" />
                </div>
                {/* Form */}
                <div className="content-form">
                  <h1>¡Ingresa a tu cuenta!</h1>
                  {/* Buttons sociales */}
                  <Stack className="content-buttons-social" direction="row" spacing={2}>
                    <Button variant="contained" className='google'>
                      <img src="assets/images/login/google.svg" alt="Logo Google" width="17" height="17" loading="lazy" />
                      Iniciar con Google
                    </Button>
                    <Button variant="contained" className='facebook'>
                      <img src="assets/images/login/facebook.svg" alt="Logo Facebook" width="17" height="17" loading="lazy" />
                      Iniciar con Facebook
                    </Button>
                  </Stack>
                  {/* Input email */}
                  <Stack spacing={2}>
                    <FormControl>
                      <InputLabel htmlFor="email">Correo electrónico</InputLabel>
                      <Input id="email" aria-describedby="email" />
                    </FormControl>
                    {/* Input password */}
                    <FormControl>
                      <InputLabel htmlFor="password">Contraseña</InputLabel>
                      <Input id="password" type='password' aria-describedby="password" />
                    </FormControl>
                  </Stack>
                  {/* Buttons Login */}
                  <Stack className="content-buttons-login" direction="row" spacing={3}  justifyContent="center">
                    <Button variant="contained" className='log-in'>
                      Iniciar sesión
                    </Button>
                    <Button variant="contained" className='sesion-create'>
                      Crear usuario
                    </Button>
                  </Stack>
                  <span className='forgot-password'>No recuerdas tu contraseña? <Link to="/" >Olvide contraseña</Link></span>
                </div>

              </div>
              <div className="content-img">
                <img src="assets/images/login/profile.png" alt="User Profile" width="320" height="100%" />
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}
