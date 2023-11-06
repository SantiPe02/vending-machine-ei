import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ibuprofen from "../resources/Ibuprofen.jpg";

function Ibuprofen() {
  const [ibuprofenStock, setIbuprofenStock] = useState([]);
  const exampleJson = {
    id: 2,
    name: "Ibuprofen",
    price: 400,
    stock: 4,
  };

  const addStock = () => {
    const newAspirinStock = [];
    for (let i = 0; i < exampleJson.stock; i++) {
      newAspirinStock.push(ibuprofen);
    }
    setIbuprofenStock(newAspirinStock);
  };

  useEffect(() => {
    addStock();
  }, []);

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
        {ibuprofenStock.map((ibuprofen, index) => (
          <img
            key={index}
            src={ibuprofen}
            alt="ibuprofen"
            width="70%"
            height="25%"
          ></img>
        ))}
      </Box>
    </Grid>
  );
}

export default Ibuprofen;
