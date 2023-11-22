import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import dyphenhydramine from "../resources/Diphenhydramine.jpeg";

function Diphenhydramine() {
    const [diphenhydramineStock, setDiphenhydramineStock] = useState([]);
    const [productData, setProductData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch("http://35.174.87.19:8080/");
            const data = await response.json();

            const vendingMachine = data[0];
            const diphenhydramineData = vendingMachine.products.find(
                (product) => product.name === "Diphemhydramine"
            );

            setProductData(diphenhydramineData);
            setDiphenhydramineStock(createStockArray(diphenhydramineData.quantity));
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
            src: dyphenhydramine,
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
                        maxHeight={500} // Use maxHeight instead of height
                        width={150}
                        borderRadius="6px"
                        marginTop={2}
                        marginBottom={1}
                        overflow="auto" // Add overflow property for scrollbar
                        sx={{ "& > *": { margin: 0.1 } }}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            {diphenhydramineStock.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.src}
                                    alt="diphenhydramine"
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

export default Diphenhydramine;