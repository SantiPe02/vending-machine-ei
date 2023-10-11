import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import diphenhydramine from "../resources/Diphenhydramine.jpeg";

function Diphenhydramine() {
  const [diphenhydramineStock, setDiphenhydramineStock] = useState([diphenhydramine]);

  const addStock = () => {
    setDiphenhydramineStock([...diphenhydramineStock, diphenhydramine]);
  };

  const deleteStock = () => {
    const newDiphenhydramineStock = [...diphenhydramineStock];
    newDiphenhydramineStock.pop();
    setDiphenhydramineStock(newDiphenhydramineStock);
  };

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Typography variant="h5">Diphenhydramine</Typography>
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
      <Button variant="contained" onClick={addStock}>
        Add stock
      </Button>
      <Button variant="contained" onClick={deleteStock} color="error">
        Delete Stock
      </Button>
    </Grid>
  );
}

export default Diphenhydramine;
