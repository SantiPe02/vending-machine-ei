import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import paracetamolImage from "../resources/paracetamol.avif";

function Paracetamol() {
    const [paracetamolStock, setParacetamolStock] = useState([]);
    const [productData, setProductData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/");
            const data = await response.json();

            const vendingMachine = data[0];
            const paracetamolData = vendingMachine.products.find(
                (product) => product.name === "Paracetamol"
            );

            setProductData(paracetamolData);
            setParacetamolStock(createStockArray(paracetamolData.quantity));
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
            src: paracetamolImage,
        }));
    };

    return (
        <Grid container direction="column" alignItems="center">
            {productData && (
                <>
                    <Typography variant="h4" fontWeight="bold">
                        {productData.name}
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
                            {paracetamolStock.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.src}
                                    alt="paracetamol"
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

export default Paracetamol;
