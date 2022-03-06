import { Card, CardContent, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import courses from "../../data/courses.json";

export const DashboardCourses = () => {


    return (
        <Container>
            <Stack sx={{ rowGap: 5, marginTop: 5 }}>
                <h5 className='title-user-profile'>CURSOS DE DIANNE AMETER</h5>
                <Grid className='grid-content-courses' wrap="nowrap" sx={{ paddingTop: "-33px" }} container spacing={2}>
                    {
                        courses.map((course, i) => (
                            <Grid className='content-courses' key={"course" + i} item xs={12} >
                                <Card sx={{ width: 149, paddingBottom: "1px" }}>
                                    <CardContent className='card-content'>
                                        <div className='card-header'>
                                            <img className='card-header_img' src={course.img} alt="" />
                                            <h5 className='card-header_title'>Curso</h5>
                                            <p className='card-header_percentage'>{course.percentage}</p>
                                        </div>
                                        <div className='card-footer'>
                                            {
                                                course.achievements.map((achievement, i) => (
                                                    <div key={"achievement" + i} className='achievement'>
                                                        <span className='level'>{achievement.number}</span>
                                                        <img className='img-level' width="20" height="auto" src={achievement.img} alt={"Nivele obtenido:" + achievement.number} loading="lazy" />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
                <Grid wrap="nowrap" container spacing={2}>
                    <Grid item xs={6} >
                        <Card sx={{ minHeight: 320 }}>
                            <CardContent>
                                <h6>Proceso semanal</h6><br></br>
                                <img src="assets/images/dashboard/courses/rate.jpg" width="317" height="auto" alt="Proceso semanal" loading='lazy'/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} >
                        <Card sx={{ minHeight: 320 }}>
                            <CardContent>
                                <img src="assets/images/dashboard/courses/Calendar.jpg" width="317" height="auto" alt="Calendario" loading='lazy'/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid wrap="nowrap" container spacing={2}>
                    <Grid item xs={3} >
                        <Card>
                            <img src="assets/images/dashboard/courses/career-progress.png" width="167" height="176" alt="Proceso por carrera" loading='lazy'/>
                        </Card>
                    </Grid>
                    <Grid item xs={3} >
                        <Card>
                            <img src="assets/images/dashboard/courses/monthly_progress.png" width="167" height="176" alt="Proceso mensual" loading='lazy'/>
                        </Card>
                    </Grid>
                    <Grid item xs={6} >
                        <h6 className='title-user-profile'>CALENDARIO DE CURSO</h6>
                        <Stack sx={{ marginTop: 1 }} spacing={1}>
                            <Card className='card-calendar'>
                                <img src="assets/images/dashboard/courses/date.jpg" alt="Fecha" loading='lazy'/>
                                <Stack className='content-info-calendar' display="grid">
                                    <span>Iniciar Curso</span>
                                    <span>04:50 p.m</span>
                                </Stack>
                            </Card>
                            <Card className='card-calendar'>
                                <img src="assets/images/dashboard/courses/date.jpg" alt="Fecha 1" loading='lazy'/>
                                <Stack className='content-info-calendar' display="grid">
                                    <span>Continuar con "curso"</span>
                                    <span>08:50 p.m</span>
                                </Stack>
                            </Card>
                            <Card className='card-calendar'>
                                <img src="assets/images/dashboard/courses/date.jpg" alt="Fecha 2" loading='lazy'/>
                                <Stack className='content-info-calendar' display="grid">
                                    <span>Mostrar curso</span>
                                    <span>04:50 p.m</span>
                                </Stack>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    )
}
