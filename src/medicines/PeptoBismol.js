import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import peptoBismol from "../resources/peptoBismol.png";

function PeptoBismol() {
  const [peptoBismolStock, setPeptoBismolStock] = useState([
    peptoBismol,
    peptoBismol,
  ]);

  const addStock = () => {
    setPeptoBismolStock([...peptoBismolStock, peptoBismol]);
  };

  const deleteStock = () => {
    const newPeptoBismolStock = [...peptoBismolStock];
    newPeptoBismolStock.pop();
    setPeptoBismolStock(newPeptoBismolStock);
  };

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Typography variant="h5">Pepto Bismol</Typography>
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
        {peptoBismolStock.map((peptoBismol, index) => (
          <img
            key={index}
            src={peptoBismol}
            alt="peptoBismol"
            width="80%"
            height="30%"
          ></img>
        ))}
      </Box>
      <Button variant="contained" onClick={addStock}>
        Add stock
      </Button>
      <Button variant="contained" onClick={deleteStock} color="error">
        Delete Stock
      </Button>
    </Grid>
  );
}

export default PeptoBismol;
