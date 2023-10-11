import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import paracetamol from "../resources/paracetamol.avif";

function Paracetamol() {
  const [paracetamolStock, setParacetamolStock] = useState([
    paracetamol,
    paracetamol,
    paracetamol,
  ]);

  const addStock = () => {
    setParacetamolStock([...paracetamolStock, paracetamol]);
  };

  const deleteStock = () => {
    const newParacetamolStock = [...paracetamolStock];
    newParacetamolStock.pop();
    setParacetamolStock(newParacetamolStock);
  };

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Typography variant="h5">Paracetamol</Typography>
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
        {paracetamolStock.map((paracetamol, index) => (
          <img
            key={index}
            src={paracetamol}
            alt="paracetamol"
            width="100%"
            height="25%"
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

export default Paracetamol;
