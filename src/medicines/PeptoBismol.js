import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import peptoBismolImage from "../resources/peptoBismol.png";

function PeptoBismol() {
    const [peptoBismolStock, setPeptoBismolStock] = useState([]);
    const [productData, setProductData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch("http://35.174.87.19:8080/");
            const data = await response.json();

            const vendingMachine = data[0];
            const peptoBismolData = vendingMachine.products.find(
                (product) => product.name === "Pepto Bismol"
            );

            setProductData(peptoBismolData);
            setPeptoBismolStock(createStockArray(peptoBismolData.quantity));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const createStockArray = (quantity) => {
        return Array.from({ length: quantity }, (_, index) => ({
            id: index,
            src: peptoBismolImage,
        }));
    };

    return (
        <Grid container direction="column" alignItems="center">
            {productData && (
                <>
                    <Typography variant="h4" fontWeight="bold">
                        PeptoBismol
                    </Typography>
                    <Typography variant="h6">Price: ${productData.price}</Typography>
                    <Box
                        border="1px solid #000"
                        maxHeight={500}
                        width={150}
                        borderRadius="6px"
                        marginTop={2}
                        marginBottom={1}
                        overflow="auto"
                        sx={{ "& > *": { margin: 0.1 } }}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            {peptoBismolStock.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.src}
                                    alt="peptoBismol"
                                    width="100%"
                                    height="30%"
                                />
                            ))}
                        </Box>
                    </Box>
                </>
            )}
        </Grid>
    );
}

export default PeptoBismol;
