import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import diphenhydramine from "../resources/Diphenhydramine.jpeg";

function Diphenhydramine() {
  const [diphenhydramineStock, setDiphenhydramineStock] = useState([]);
  const exampleJson = {
    id: 5,
    name: "Diphenhydramine",
    price: 600,
    stock: 1,
  };

  const addStock = () => {
    const newAspirinStock = [];
    for (let i = 0; i < exampleJson.stock; i++) {
      newAspirinStock.push(diphenhydramine);
    }
    setDiphenhydramineStock(newAspirinStock);
  };

  useEffect(() => {
    addStock();
  }, []);

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Typography variant="h4" fontWeight="bold">
        {exampleJson.name}
      </Typography>
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
        sx={{ "& > *": { margin: 0.1 } }}
      >
        {diphenhydramineStock.map((diphenhydramine, index) => (
          <img
            key={index}
            src={diphenhydramine}
            alt="diphenhydramine"
            width="100%"
            height="30%"
          ></img>
        ))}
      </Box>
    </Grid>
  );
}

export default Diphenhydramine;
