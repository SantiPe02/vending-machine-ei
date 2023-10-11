import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import Aspirin from "./medicines/Aspirin";
import Diphenhydramine from "./medicines/Diphenhydramine";
import Ibuprofen from "./medicines/Ibuprofen";
import Paracetamol from "./medicines/Paracetamol";
import PeptoBismol from "./medicines/PeptoBismol";

function App() {
  return (
    <Grid container direction={"column"} alignContent={"center"} alignItems={'center'}>
      <Typography variant="h1" marginTop={2}>Vending Machine</Typography>
      <Box display={'flex'} marginTop={5} sx={{ '& > *': { margin: '0 100px' } }}>
        <Aspirin />
        <Diphenhydramine />
        <Ibuprofen />
        <Paracetamol />
        <PeptoBismol />
      </Box>
    </Grid>
  );
}

export default App;
