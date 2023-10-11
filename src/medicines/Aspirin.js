import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import aspirin from "../resources/aspirin.jpg";

function Aspirin() {
  const [aspirinStock, setAspirinStock] = useState([aspirin, aspirin]);

  const addStock = () => {
    setAspirinStock([...aspirinStock, aspirin]);
  }

  const deleteStock = () => {
    const newAspirinStock = [...aspirinStock];
    newAspirinStock.pop();
    setAspirinStock(newAspirinStock);
  }

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Typography variant="h5">Aspirin</Typography>
      <Box
        border={"1px solid #000"}
        height={500}
        width={150}
        borderRadius={"6px"}
        marginTop={2}
        marginBottom={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        sx={{ "& > *": { margin: 0.5 } }}
      >
        {aspirinStock.map((aspirin, index) => (
          <img
            key={index}
            src={aspirin}
            alt="aspirin"
            width="40%"
            height="25%"
          ></img>
        )
        )}
      </Box>
      <Button variant="contained" onClick={addStock}>Add stock</Button>
      <Button variant="contained" onClick={deleteStock} color="error">Delete Stock</Button>
    </Grid>
  );
}

export default Aspirin;
