import { ThemeProvider } from '@material-ui/styles'
import React, { useContext } from 'react'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import AppContext from '../components/AppContext'
import { theme } from '../theme'
import TradesPage from './TradesPage'
import Landingpage from './Landingpage'
import MakeTrade from './MakeTrade'
import CloseTrade from './CloseTrade'
import Notfound from './Notfound'
import Footer from '../components/Footer'
import Login from './Login'

export default function Pages() {
    const globalStates = useContext(AppContext)
    return (
        <>
                    <div style={{backgroundColor:"#0f0f0f", minHeight:"100vh"}}>
                        <Route path = "/" exact component={Landingpage} />
                        <Route path="/trades" exact component={TradesPage} />
                        <Route path="/maketrade" exact component={MakeTrade} />
                        <Route path="/closetrade" exact component={CloseTrade} />
                        <Route path="/login" exact component={Login} />
                    </div>
        </>
    )
}
