import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ibuprofen from "../resources/Ibuprofen.jpg";

function Ibuprofen() {
  const [ibuprofenStock, setIbuprofenStock] = useState([ibuprofen, ibuprofen, ibuprofen]);

  const addStock = () => {
    setIbuprofenStock([...ibuprofenStock, ibuprofen]);
  };

  const deleteStock = () => {
    const newIbuprofenStock = [...ibuprofenStock];
    newIbuprofenStock.pop();
    setIbuprofenStock(newIbuprofenStock);
  };

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Typography variant="h5">Ibuprofen</Typography>
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
      <Button variant="contained" onClick={addStock}>
        Add stock
      </Button>
      <Button variant="contained" onClick={deleteStock} color="error">
        Delete Stock
      </Button>
    </Grid>
  );
}

export default Ibuprofen;
