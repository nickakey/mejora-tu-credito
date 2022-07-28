import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Header from './Header';
import HomePage from './HomePage';
import InputPage from './InputPage';
import DownloadPage from './DownloadPage';


const App = () =>{

  const [pageIndex, setPageIndex] = useState(0);

    return (
        <div className="App">
          <Header></Header>
            {pageIndex === 0 && <HomePage pageIndex={pageIndex} setPageIndex={setPageIndex}/>}
            {pageIndex === 1 && <InputPage pageIndex={pageIndex} setPageIndex={setPageIndex}/>}
            {pageIndex === 2 && <DownloadPage pageIndex={pageIndex} setPageIndex={setPageIndex}/>}{" "}
        </div>
    );
}

export default App
