import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import aspirin from "../resources/aspirin.jpg";

function Aspirin() {
  const [aspirinStock, setAspirinStock] = useState([]);
  const exampleJson = {
    id: 1,
    name: "Aspirin",
    price: 500,
    stock: 2,
  };

  const addStock = () => {
    const newAspirinStock = [];
    for (let i = 0; i < exampleJson.stock; i++) {
      newAspirinStock.push(aspirin);
    }
    setAspirinStock(newAspirinStock);
  };
  
  useEffect(() => {
    addStock();
  }, []);

  const deleteStock = () => {
    const newAspirinStock = [...aspirinStock];
    newAspirinStock.pop();
    setAspirinStock(newAspirinStock);
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
        {aspirinStock.map((aspirin, index) => (
          <img
            key={index}
            src={aspirin}
            alt="aspirin"
            width="40%"
            height="25%"
          ></img>
        ))}
      </Box>
      <Button variant="contained" onClick={deleteStock} color="error">
        Delete Stock
      </Button>
    </Grid>
  );
}

export default Aspirin;
