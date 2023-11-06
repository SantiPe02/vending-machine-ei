import { Grid, Typography, Box, Button } from '@mui/material';
import React from 'react'
import Aspirin from '../medicines/Aspirin';
import Diphenhydramine from '../medicines/Diphenhydramine';
import Ibuprofen from '../medicines/Ibuprofen';
import Paracetamol from '../medicines/Paracetamol';
import PeptoBismol from '../medicines/PeptoBismol';
import { useNavigate, useParams } from 'react-router-dom';

function HomePage() {
    const machineId = useParams().machineId;
    const nav = useNavigate();
    const goBackClick = () => {
        nav(`/`);
    };

    return (
        <Grid container direction={"column"} alignContent={"center"} alignItems={'center'}>
          <Typography variant="h1" marginTop={2}>Vending Machine: {machineId}</Typography>
          <Typography variant="h4" marginTop={1}>Balance: </Typography>
          <Box display={'flex'} marginTop={5} sx={{ '& > *': { margin: '0 90px' } }}>
            <Aspirin />
            <Diphenhydramine />
            <Ibuprofen />
            <Paracetamol />
            <PeptoBismol />
          </Box>
          <Button variant='contained' sx={{marginTop: 5}} onClick={goBackClick}>go back</Button>
        </Grid>
      );
}

export default HomePage