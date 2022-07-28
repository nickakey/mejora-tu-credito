import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { AppBar, Typography, Container, Toolbar, Box, IconButton, MenuIcon, Menu } from "@mui/material";
import CreditCard from "@mui/icons-material/CreditCard";


const Header = () => {

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <CreditCard
                            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                // fontFamily: "monospace",
                                fontWeight: 700,
                                // letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            MejoraTuCredito.io
                        </Typography>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;
