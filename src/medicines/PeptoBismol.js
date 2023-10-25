import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import peptoBismol from "../resources/peptoBismol.png";

function PeptoBismol() {
  const [peptoBismolStock, setPeptoBismolStock] = useState([]);

  const exampleJson = {
    id: 4,
    name: "PeptoBismol",
    price: 300,
    stock: 2,
  };

  const addStock = () => {
    const newAspirinStock = [];
    for (let i = 0; i < exampleJson.stock; i++) {
      newAspirinStock.push(peptoBismol);
    }
    setPeptoBismolStock(newAspirinStock);
  };

  useEffect(() => {
    addStock();
  }, []);

  const deleteStock = () => {
    const newPeptoBismolStock = [...peptoBismolStock];
    newPeptoBismolStock.pop();
    setPeptoBismolStock(newPeptoBismolStock);
  };

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Typography variant="h4" fontWeight='bold'>{exampleJson.name}</Typography>
      <Typography variant="h6">Price: ${exampleJson.price}</Typography>
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
      <Button variant="contained" onClick={deleteStock} color="error">
        Delete Stock
      </Button>
    </Grid>
  );
}

export default PeptoBismol;
