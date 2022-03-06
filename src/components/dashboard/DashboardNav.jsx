import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Button, Container, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'

export const DashboardNav = () => {
    return (
        <Container>
            <h1 className='title-course'>Perfil del estudiante</h1>
            <Grid wrap="nowrap" alignItems="flex-end" container>
                <Grid item display="flex" alignItems="flex-end" xs={6} >
                    <SearchOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField className='search-input' id="input-search" label="Buscar" variant="standard" />
                    <Button sx={{ backgroundColor: '#FFFFFF', color: '#c7c7c7' }}><FilterAltOutlinedIcon /></Button>
                </Grid>
                <Grid item display="flex" xs={6} spacing-xs-1="true" justifyContent="space-evenly">
                    <FormControl>
                        <Select className='select-order'
                            labelId="order"
                            id="demo-simple-select"
                            value={10}
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem selected value={10}>Sort by: Highest Score</MenuItem>
                            <MenuItem value={20}>Highest Score</MenuItem>
                            <MenuItem value={30}>Highest Score</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className='btn-invite-students'><AddOutlinedIcon />Invite Students</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
