import React from "react";
import "./App.css";
import {GlobalState} from "./GlobalState";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pages from "./views/Pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { theme } from "./theme";
import {ThemeProvider} from "@material-ui/styles"
import GenericNotFound from "./views/GenericNotFound";


export default function App() {
  
  return (
    <>
      <GlobalState>
            <ThemeProvider theme={theme}>
              <Router>
                <Navbar />
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
