import React from "react";
import "./App.css";
import {GlobalState} from "./GlobalState";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Pages from "./views/Pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { theme } from "./theme";
import {ThemeProvider} from "@material-ui/styles"


export default function App() {
  return (
    <>
      <GlobalState>
            <ThemeProvider theme={theme}>
              <Router>
                <Switch>
                    <Pages />
                </Switch>
                <Footer />  
              </Router>
            </ThemeProvider>
      </GlobalState>
    </>
  )
}
