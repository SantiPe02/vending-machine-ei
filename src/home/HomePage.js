import { Grid, Typography, Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Aspirin from '../medicines/Aspirin';
import Diphenhydramine from '../medicines/Diphenhydramine';
import Ibuprofen from '../medicines/Ibuprofen';
import Paracetamol from '../medicines/Paracetamol';
import PeptoBismol from '../medicines/PeptoBismol';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const nav = useNavigate();
    const [credit, setCredit] = useState(0);

    const handleStatisticsClick = () => {
        nav(`/statistics`);
    };

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/");
            const data = await response.json();

            const vendingMachine = data[0];
            setCredit(vendingMachine.credit);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Grid container direction={"column"} alignContent={"center"} alignItems={'center'}>
            <Typography variant="h1" marginTop={2}>
                Vending Machine
            </Typography>
            <Typography variant="h4" marginTop={1}>
                Credit: ${credit}
            </Typography>
            <Box display={'flex'} marginTop={5} sx={{ '& > *': { margin: '0 90px' } }}>
                <Diphenhydramine />
                <Ibuprofen />
                <Paracetamol />
                <PeptoBismol />
            </Box>
            <Button variant='contained' sx={{ marginTop: 5 }} onClick={handleStatisticsClick}>
                Check statistics
            </Button>
        </Grid>
    );
}

export default HomePage;