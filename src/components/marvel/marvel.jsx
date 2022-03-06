import { SeriesGrid } from "./SeriesGrid"
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import './Marvel.css'
import { Link } from "react-router-dom";

export const Marvel = () => {


  return (
    <main role="main">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="app-bar" position="fixed">
          <Toolbar>
            <Link to={'/'} color="inherit"><ArrowCircleLeftIcon /></Link>
            <Typography className="logo-marvel" variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Series <img src="assets/images/marvel/logo.svg" width="80px" height="auto" alt="Logo Marvel" loading='lazy'/>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <SeriesGrid />
    </main>

  )
}
