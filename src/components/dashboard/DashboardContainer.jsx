import React from 'react'
import { DashboardDrawer } from './DashboardDrawer'
import './Dashboard.css'
import { Container, Grid } from '@mui/material'
import { DashboardNav } from './DashboardNav'
import { DashboardCourses } from './DashboardCourses'

export const DashboardContainer = () => {
    return (
        <>
            <main className='board-container' role="main">
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <DashboardNav />
                            <DashboardCourses />
                        </Grid>
                        <Grid item xs={4}>
                            <DashboardDrawer />
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}
