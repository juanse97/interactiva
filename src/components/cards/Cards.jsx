import { Link } from 'react-router-dom'
import './Cards.css';
import { ButtonBase, Container, Grid } from '@mui/material';
export const Cards = () => {

    return (
        <>
            <main role="main">
                <div className="content-home">
                    <Container maxWidth="xl">
                        <Grid container justifyContent="space-between" wrap="nowrap" >
                            <Grid item xs={6}>
                                <Link to="/login">
                                    <ButtonBase className='btn-base'>
                                        <span className='image-backdrop image_login' ></span>
                                        <span className='back-img2'></span>
                                        <span className='content-title'>
                                            <span className='title'>Maquetación Login
                                                <span className='marked'></span>
                                            </span>
                                        </span>
                                    </ButtonBase>
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="/dashboard">
                                    <ButtonBase className='btn-base'>
                                        <span className='image-backdrop image_dashboard' ></span>
                                        <span className='back-img2'></span>
                                        <span className='content-title'>
                                            <span className='title'>Maquetación Dashboard
                                                <span className='marked'></span>
                                            </span>
                                        </span>
                                    </ButtonBase>
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="/marvel">
                                    <ButtonBase className='btn-base'>
                                        <span className='image-backdrop image_marvel' ></span>
                                        <span className='back-img2'></span>
                                        <span className='content-title'>
                                            <span className='title'>Maquetación Marvel
                                                <span className='marked'></span>
                                            </span>
                                        </span>
                                    </ButtonBase>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </>

    )
}
