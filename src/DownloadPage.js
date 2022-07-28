import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const DownloadPage = ({ pageIndex, setPageIndex }) => {
    return (
        <div className="input">
            THIS IS THE DOWNLOAD PAGE
            <Button
                onClick={() => setPageIndex(pageIndex + 1)}
                variant="contained"
            >
                NEXT
            </Button>
        </div>
    );
};

export default DownloadPage;