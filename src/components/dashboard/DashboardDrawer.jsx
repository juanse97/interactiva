import { Link } from 'react-router-dom';

import { Container, Button, Box, Stack } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


export const DashboardDrawer = () => {


    return (
        <>
            <Box className='container-drawer' role="presentation">
                <Container>
                    <Stack justifyContent="right" direction="row" spacing={2}>
                        <img src="assets/images/dashboard/notification.png" width="40" height="40" alt="Notificación" loading='lazy'/>
                        <img src="assets/images/dashboard/avatar.png" width="40" height="40" alt="Mini imagen de usuario" loading='lazy'/>
                    </Stack>
                    <div className="content-user-information">
                        <img className='user-image' src="assets/images/dashboard/avatar.png" width="130px" height="auto" alt="Imagen de usuario" loading='lazy'/>
                        <div className="personal-information">
                            <h4>Dianne Ameter</h4>
                            <p>Estudiante </p>
                        </div>
                        <Stack spacing={0.5}>
                            <Button className='btn-personal-information'><CalendarTodayOutlinedIcon />Crear calendario</Button>
                            <Button className='btn-personal-information'><SendOutlinedIcon />dianne@email.com</Button>
                            <Button className='btn-personal-information'><LocalPhoneOutlinedIcon />714-498-9567</Button>
                            <Button className='btn-personal-information'><SettingsOutlinedIcon />Configuración</Button>
                        </Stack>
                    </div>
                    <div className="footer-drawer">
                        <img className='logo-analdex' src="assets/images/dashboard/analdex.png" width="80px" height="auto" alt="Logo Analdex" loading='lazy'/>
                        <img className='logo-interactiva' src="assets/images/dashboard/interactiva.png" width="80px" height="auto" alt="Logo Interactiva" loading='lazy'/>
                        <Link className='btn-exit' to="/"><LogoutOutlinedIcon />Salir</Link>
                    </div>

                </Container>
            </Box>
        </>
    )
}

