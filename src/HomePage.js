import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Card, CardActions, CardContent, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";


const HomePage = ({pageIndex, setPageIndex}) => {


        return (
            <>
                <Box className="hero-text-homepage">
                    <Typography variant="h2">
                        Como Mejorar tu credito
                    </Typography>
                </Box>
                <Paper className="homescreen-paper" elevation={3}>
                    <Typography variant="body1">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum."
                    </Typography>
                    <Box className="card-container">
                        <Card1 />
                        <Card2 />
                        <Card3 />
                    </Box>
                    <Button onClick={() => setPageIndex(pageIndex + 1)} variant="contained">Mejoralo Ahora!</Button>
                </Paper>
            </>
        );
}

const Card1 = () => (
    <Card className="card">
        <CardContent>
            <Typography sx={{ fontSize: 18 }} color="white" gutterBottom>
                Step 1
            </Typography>
            <HistoryEduIcon sx={{ fontSize: 60 }} />
            <Typography variant="body2" sx={{ fontSize: 18 }}>
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
    </Card>
);

const Card2 = () => (
    <Card className="card">
        <CardContent>
            <Typography sx={{ fontSize: 18 }} color="white" gutterBottom>
                Step 1
            </Typography>
            <CreditScoreIcon sx={{ fontSize: 60 }} />
            <Typography variant="body2" sx={{ fontSize: 18 }}>
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
    </Card>
);

const Card3 = () => (
    <Card className="card">
        <CardContent>
            <Typography sx={{ fontSize: 18 }} color="white" gutterBottom>
                Step 1
            </Typography>
            <EmojiEmotionsIcon sx={{ fontSize: 60 }} />
            <Typography variant="body2" sx={{ fontSize: 18 }}>
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
    </Card>
);

export default HomePage;
