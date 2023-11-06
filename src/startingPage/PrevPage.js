import { Grid, Input, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PrevPage() {
  const [machineId, setMachineId] = useState(0);
  const nav = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    setMachineId(event.target.value);
    if (event.target.value >= 0 && event.target.value !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleEnterClick = () => {
    nav(`/vendingMachine/${machineId}`);
  };
  console.log(machineId);

  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Box alignItems={"center"}>
        <Typography variant="h3">Select vending machine by id</Typography>
        <Input
          placeholder="Vending machine id"
          type="number"
          sx={{
            border: "1px solid #000",
            width: "100%",
            height: 50,
            marginTop: 10,
            borderRadius: 2,
            textAlign: "center",
          }}
          onChange={handleInputChange}
        />
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{ marginTop: 10 }}
            onClick={handleEnterClick}
            disabled={isButtonDisabled}
          >
            enter
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default PrevPage;
